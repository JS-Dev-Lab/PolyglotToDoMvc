import { mapToDebug } from "mvi.core";

async function getEngine(type) {
  try {
    const { createView } = await import(
      /* webpackChunkName: "[request]" */
      `./frameworks/${type}/bootstrap`
    );
    return mapToDebug(createView);
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
