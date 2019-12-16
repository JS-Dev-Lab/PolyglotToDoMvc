import { UiEngine } from "./infra/engine";
import App from "./App.vue";

const engine = new UiEngine("#app", App);

export { engine };
