import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) {
      const newTodo = {
        id: new Date().getTime(),
        done: false,
        description,
      };

      onNewTodo(newTodo);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Qué hay que hacer?"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};