function onNavigate(callback) {
  window.addEventListener('hashchange', () => {
    callback(window.location.hash);
  });
  callback(window.location.hash);
}

export { onNavigate }