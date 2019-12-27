import { render } from 'lit-html';
import { connectViaExtension, extractState } from 'remotedev';

const remoteDev = connectViaExtension();

function getSendableState(state) {
  const stateToSend = { ...state };
  delete stateToSend.commands;
  return stateToSend;
}

class UiEngine {
  constructor(element, template) {
    this._template = template;
    this._element = element;
  }

  initialRender(state) {
    remoteDev.init(getSendableState(state), { name: 'Uapps' });
    return new View({ ...state }, this._element, this._template);
  }
}

let currentView;

class View {
  constructor(state, element, template) {
    this._state = Object.freeze(state);
    this._element = element;
    this._template = template;
    render(template(this._state), element);
    currentView = this;
  }

  update(updater) {
    const newState = { ...this._state };
    updater(newState);
    remoteDev.send("blabla", getSendableState(newState));
    return new View(newState, this._element, this._template);
  }

  fullUpdate(newState){
    const {commands} = this._state;
    this._state = { ...newState, commands};
    render(this._template(this._state), this._element);
  }
}

remoteDev.subscribe(message => {
  const state = extractState(message);
  if (!state) {
    return;
  }
  currentView.fullUpdate(state);
});


export { UiEngine };
