import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {
  console.log(todos);

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};
