import { UIEngine } from "./infra/engine";
import App from "./App";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "../../style/style.css";

const root = document.getElementById("app");
const engine = new UIEngine(App, root);

export { engine };
