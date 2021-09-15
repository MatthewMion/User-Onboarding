import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import formSchema from "./validation/FormSchema";
import axios from "axios";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
