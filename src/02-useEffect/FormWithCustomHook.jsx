import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

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
      <input
        type="password"
        className="form-control"
        placeholder="password"
        name="password"
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn mt-3">
        Borrar
      </button>
    </>
  );
};
