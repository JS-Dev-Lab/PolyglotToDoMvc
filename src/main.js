import { getEngine } from "./UIEngineFactory";
import { run } from "./application/app";
import { storage } from "./application/storage";
import { onNavigate } from "./application/navigation";

async function main(type) {
  const createView = await getEngine(type);
  run(createView, storage, onNavigate);
}

window.console.log(process.env.Framework);
main(process.env.Framework);
