import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "enrique",
    email: "enrique@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("UseEffect called!");
  });

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control"
        placeholder="admin@admin.com"
        name="email"
        onChange={onInputChange}
      />
    </>
  );
};
