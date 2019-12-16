import { UiEngine } from "./infra/engine";
import { render } from "./render";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

const element = document.getElementById("app");
const engine = new UiEngine(element, render);

export { engine };
