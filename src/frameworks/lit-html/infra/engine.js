import { render } from "lit-html";
import { connectViaExtension, extractState } from "remotedev";

function getSendableState(state) {
  const stateToSend = { ...state };
  delete stateToSend.commands;
  return stateToSend;
}

class UiEngine {
  constructor(element, template, viewName) {
    this._template = template;
    this._element = element;
    this._viewName = viewName;
  }

  initialRender(state) {
    return new View(
      { ...state },
      this._element,
      this._template,
      this._viewName,
      null
    );
  }
}

function handleRemoteDev(remoteDevHandler, state, viewName, updateState) {
  const sendableState = getSendableState(state);
  updater = updateState;
  if (remoteDevHandler) {
    remoteDevHandler.updateState = updateState;
    remoteDevHandler.remoteDev.send("action", sendableState);
    return remoteDevHandler;
  }

  const remoteDev = connectViaExtension();
  remoteDev.init(sendableState, { name: `${viewName}` });
  const remoteDevHandler = {
    remoteDev,
    updateState
  };
  remoteDev.subscribe(message => {
    const state = extractState(message);
    if (!state) {
      return;
    }
    remoteDevHandler.updateState(state);
  });
  return remoteDevHandler;
}

class View {
  constructor(state, element, template, viewName, remoteDev) {
    remoteDev = handleRemoteDev(remoteDev, state, viewName, newState => {
      this.fullUpdate(newState);
    });
    this._state = Object.freeze(state);
    this._element = element;
    this._template = template;
    this._remoteDev = remoteDev;
    render(template(this._state), element);
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    return new View(
      newState,
      this._element,
      this._template,
      null,
      this._remoteDev
    );
  }

  fullUpdate(newState) {
    const { commands } = this._state;
    this._state = { ...newState, commands };
    render(this._template(this._state), this._element);
  }
}
export { UiEngine };
