import { getEngine } from "./UIEngineFactory";
import { run } from "./application/app";
import { storage } from "./application/storage";

async function main(type) {
  const engine = await getEngine(type);
  run(engine, storage);
}

window.console.log(process.env.Framework);
main(process.env.Framework);
