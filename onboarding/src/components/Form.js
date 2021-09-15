import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2> Add a User</h2>
        <button disabled={disabled}>Submit</button>
        <div className="errors">
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>User Information</h4>
        <label>
          First Name
          <input
            value={values.first_name}
            onChange={onChange}
            name="first_name"
            type="text"
          />
        </label>
        <label>
          Last Name
          <input
            value={values.last_name}
            onChange={onChange}
            name="last_name"
            type="text"
          />
        </label>
        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="email"
          />
        </label>
      </div>
      <label>
        Password
        <input
          value={values.password}
          onChange={onChange}
          name="password"
          type="password"
        />
      </label>
      <div className="form-group checkboxes">
        <label>
          Terms of Service
          <input
            type="checkbox"
            name="termsOfService"
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  );
}
