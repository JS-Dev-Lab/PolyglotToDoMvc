async function getEngine(type) {
  try {
    const { engine } = await import(`./frameworks/${type}/bootstrap`);
    return engine;
  } catch {
    throw new Error(`invalid type: ${type}`);
  }
}

export { getEngine };
