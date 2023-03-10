import { useEffect, useState } from "react";
import { Message } from "./message";

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
    // console.log("UseEffect called!");
  }, []);

  useEffect(() => {
    // console.log("FormState changed!");
  }, [formState]);

  useEffect(() => {
    // console.log("Email changed!");
  }, [email]);

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
      {username === "enrique" && <Message />}
    </>
  );
};
