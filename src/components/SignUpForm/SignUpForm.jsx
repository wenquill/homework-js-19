import { useState, useReducer } from "react";
import { PiEyeLight, PiEyeClosedLight } from "react-icons/pi";
import styles from "./SignUpForm.module.css";
import SignUpItem from "./SignUpItem";

function SignUpForm() {

  const [isChecked, setChecked] = useState(false)
  const [isVisible, setVisible] = useState(false)

  const [values, setValues] = useState({
    name: "",
    surname: "",
    passw: "",
    passw2: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      errorMessage:
        "it should be 2-20 characters and shouldn`t include any special characters",
      pattern: "^(?=.*[A-Za-z])[a-zA-Z]{2,20}$",
    },
    {
      id: 2,
      name: "surname",
      type: "text",
      placeholder: "Enter your surname",
      errorMessage:
        "it should be 3-20 characters and shouldn`t include any special characters",
      pattern: "^(?=.*[A-Za-z])[a-zA-Z]{3,20}$",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      errorMessage: "this email address is invalid",
      pattern: "^.+@.+$",
    },
    {
      id: 4,
      name: "passw",
      type: isVisible ? "text" : "password",
      placeholder: "Create your password",
      errorMessage:
        "password should contain 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      pattern: "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!#$&^@%._])[a-zA-Z0-9!#$&^@%._]{8,20}$",
    },
    {
      id: 5,
      name: "passw2",
      type: isVisible ? "text" : "password",
      placeholder: "Confirm your password",
      errorMessage: "passwords don`t match",
      pattern: values.passw,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function checkHandler() {
    setChecked(!isChecked)
  }

  function visibleHandler() {
    setVisible(!isVisible)
  }

  function submitHandler(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        {inputs.map((input) => ( 
          <SignUpItem
            key={input.id}
            onChange={onChange}
            value={values[input.name]}
            visibleHandler={visibleHandler}
            isVisible={isVisible}
            {...input}
          />
        ))}
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="checkbox"
            className={styles.formInputCheckbox}
            checked={isChecked}
            onChange={checkHandler}
          />
          <label className={styles.formInputCheckboxLabel}>
            I agree all{" "}
            <a href="#" className={styles.checkboxLink}>
              statements
            </a>{" "}
            in terms of service
          </label>
        </div>
        <button className={styles.submitBtn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
