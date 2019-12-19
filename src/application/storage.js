var STORAGE_KEY = "todos-universal";
const storage = {
  load: function() {
    const state = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '{ "id": 1, "todos": []}'
    );
    return state;
  },
  save: function({ todos, id }) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ todos, id }));
  }
};

export { storage };
