const todos = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del Alma",
    done: false,
  },
];

export const TodoList = () => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => {
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className="align-self-center">Item 1</span>
            <button className="btn btn-danger">Borrar</button>
          </li>;
        })}
      </ul>
    </>
  );
};
