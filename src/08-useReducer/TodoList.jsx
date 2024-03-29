import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  console.log(todos);

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={(id) => onDeleteTodo(id)}
              onToggleTodo={onToggleTodo}
            />
          );
        })}
      </ul>
    </>
  );
};
