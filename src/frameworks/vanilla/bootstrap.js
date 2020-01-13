import { viewCreatorFactory } from "mvi.vanilla";
import { render } from "./render";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "../../style/style.css";

const element = document.getElementById("app");
const createView = viewCreatorFactory(element, render);

export { createView };
