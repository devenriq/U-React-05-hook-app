import { useTodos } from "../hooks/useTodos";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del Alma",
  //   done: false,
  // }
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodos();

  return (
    <>
      <h1>
        TodoApp: {todos.length},{" "}
        <small>pendientes: {todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {
            <TodoList
              todos={todos}
              onDeleteTodo={(id) => handleDeleteTodo(id)}
              onToggleTodo={handleToggleTodo}
            />
          }
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
