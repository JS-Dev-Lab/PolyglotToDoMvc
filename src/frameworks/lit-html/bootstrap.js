import { UiEngine } from "./infra/engine";
import { template } from "./template";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "../../style/style.css";

const element = document.getElementById("app");
const engine = new UiEngine(element, template);

export { engine };
