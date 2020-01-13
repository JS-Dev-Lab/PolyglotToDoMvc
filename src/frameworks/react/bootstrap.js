import { viewCreatorFactory } from "mvi.react";
import App from "./App";

import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import "../../style/style.css";

const root = document.getElementById("app");
const createView = viewCreatorFactory(App, root);

export { createView };
