import apiService from "@/api.service";
import Button from "@components/Button";
import React from "react";
import Form from "./Form/Form";
import Input from "./Form/Input";
import Item from "./Item";

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
    default:
      return state;
  }
}

export default function Main() {
  const [inputTodo, setInputTodo] = React.useState({});
  const [state, dispatch] = React.useReducer(reducer, []);

  const handleChange = (event) => {
    setInputTodo((prev) => ({ ...prev, text: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (inputTodo.id) {
      apiService.update(inputTodo).then((updatedTodoResp) => {
        setInputTodo({});
        dispatch({ type: "UPDATE", payload: updatedTodoResp });
      });
      return;
    }

    const myFormData = new FormData(form);
    const newTodo = {
      id: state.length + 1,
      completed: false,
      ...Object.fromEntries(myFormData),
    };

    apiService.create(newTodo).then((newTodoResp) => {
      setInputTodo({});
      dispatch({ type: "CREATE", payload: newTodoResp });
    });
  };

  React.useEffect(() => {
    apiService.getAll().then((todos) => {
      dispatch({ type: "LOAD_TODOS", payload: todos });
    });
  }, []);

  return (
    <main>
      <Form submitHandler={handleSubmit}>
        <Input changeHandler={handleChange} inputTodo={inputTodo} />
        <Button text="Submit" className="button-add" />
      </Form>

      <ol>
        {state.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
            setInputTodo={setInputTodo}
          />
        ))}
      </ol>
    </main>
  );
}
