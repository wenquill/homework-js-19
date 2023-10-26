import classNames from "classnames";
import { useState, useReducer } from "react";
import styles from "./SignUpForm.module.css";

const LOGIN_FORM_REG_EXP = {
  login: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
};

function SignUpForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [passw, setPassw] = useState("");
  const [passw2, setPassw2] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setCheckbox] = useState(false);

  function nameChangeHandler({ target: { value } }) {
    setName(value);
  }

  function surnameChangeHandler({ target: { value } }) {
    setSurname(value);
  }

  function passwChangeHandler({ target: { value } }) {
    setPassw(value);
  }

  function passw2ChangeHandler({ target: { value } }) {
    setPassw2(value);
  }

  function emailChangeHandler({ target: { value } }) {
    setEmail(value);
  }

  function checkChangeHandler(e) {
    setCheckbox(!isChecked);
  }

  function submitHandle(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setSurname("");
    setPassw("");
    setCheckbox(false);
  }

  function emailValidation() {
    if (!email) {
      return "this field is required";
    } else if (!LOGIN_FORM_REG_EXP.login.test(email)) {
      return "email is incorrect";
    }
  }

  function passwordValidation() {
    if (!passw) {
      return "this field is required";
    } else if (passw.length < 8) {
      return "password should contain at least 8 characters";
    } else if (!LOGIN_FORM_REG_EXP.password.test(passw)) {
      return "password should contain at least one letter, a number and a special character";
    }
  }

  function password2Validation() {
    if (!passw2) {
      return "this field is required";
    } else if (passw2 !== passw) {
      return "passwords don`t match";
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form} onSubmit={submitHandle}>
        <div className={styles.formInputContainer}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={styles.formInput}
            value={name}
            onChange={nameChangeHandler}
          />
          <small>{name ? '' : 'this field is required'}</small>
        </div>
        <div className={styles.formInputContainer}>
          <input
            type="text"
            name="surname"
            placeholder="Enter your surname"
            className={styles.formInput}
            value={surname}
            onChange={surnameChangeHandler}
          />
          <small>{surname ? '' : 'this field is required'}</small>
        </div>
        <div className={styles.formInputContainer}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.formInput}
            value={email}
            onChange={emailChangeHandler}
          />
          <small>{emailValidation()}</small>
        </div>
        <div className={styles.formInputContainer}>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            className={styles.formInput}
            value={passw}
            onChange={passwChangeHandler}
          />
          <small>{passwordValidation()}</small>
        </div>
        <div className={styles.formInputContainer}>
          <input
            type="password"
            name="password-confirm"
            placeholder="Repeat the password"
            className={styles.formInput}
            onChange={passw2ChangeHandler}
          />
          <small>{password2Validation()}</small>
        </div>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="checkbox"
            className={styles.formInputCheckbox}
            checked={isChecked}
            onChange={checkChangeHandler}
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
