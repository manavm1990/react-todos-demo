import apiService from "@/api.service";
import React from "react";
import List from "./List/List";

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_TODOS":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
    case "DELETE":
      return state.filter((item) => item.id !== action.payload.id);
    case "TOGGLE":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      });
    default:
      return state;
  }
}

export default function Main() {
  const [state, dispatch] = React.useReducer(reducer, []);

  React.useEffect(() => {
    apiService.getAll().then((todos) => {
      dispatch({ type: "LOAD_TODOS", payload: todos });
    });
  }, []);

  return (
    <main>
      <List todos={state} />
    </main>
  );
}
