import ky from "ky";

const BASE_URL = "http://localhost:3001/todos";

export default {
  getAll() {
    return ky.get(BASE_URL).json();
  },
  create(todo) {
    return ky.post(BASE_URL, { json: todo }).json();
  },
  update(todo) {
    return ky.put(`${BASE_URL}/${todo.id}`, { json: todo }).json();
  },
  delete(todo) {
    return ky.delete(`${BASE_URL}/${todo.id}`).json();
  },
};
