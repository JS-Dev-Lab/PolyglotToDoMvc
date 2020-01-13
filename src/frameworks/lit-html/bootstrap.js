import { viewCreatorFactory } from "mvi.lit-html";
import { template } from "./template";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "../../style/style.css";

const element = document.getElementById("app");
const createView = viewCreatorFactory(element, template);

export { createView };
