import classNames from "classnames";
import { useState, useReducer } from "react";
import { PiEyeLight, PiEyeClosedLight } from "react-icons/pi";
import styles from "./SignUpForm.module.css";

const LOGIN_FORM_REG_EXP = {
  login: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!#%._].*).{8,16}$/
}

function SignUpForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [passw, setPassw] = useState("");
  const [visible, setVisible] = useState(false);
  const [passw2, setPassw2] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setCheckbox] = useState(false);

  const [state, formDispatch] = useReducer(formReducer, "");

  function formReducer(state, { type, payload }) {
    switch (type) {
      case "name":
        {
          setName(payload);
        }
        break;
      case "surname":
        {
          setSurname(payload);
        }
        break;
      case "email":
        {
          setEmail(payload);
        }
        break;
      case "password":
        {
          setPassw(payload);
        }
        break;
      case "password2":
        {
          setPassw2(payload);
        }
        break;
      case "checkbox":
        {
          setCheckbox(!isChecked);
        }
        break;
      case "submit":
        {
          payload.preventDefault();
          setName("");
          setEmail("");
          setSurname("");
          setPassw("");
          setPassw2("");
          setCheckbox(false);
        }
        break;
    }
    return state;
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
    } else if (passw[0].length < 8) {
      return "password should contain at least 8 characters";
    } else if (!LOGIN_FORM_REG_EXP.password.test(passw)) {
      return "password should contain at least one letter, a number and a special character";
    }
  }

  function password2Validation() {
    if (!passw2) {
      return "this field is required";
    } else if (passw[0] !== passw2[0]) {
      return "passwords don`t match";
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.notBlured}>
        <h1 className={styles.title}>Sign Up</h1>
        <form
          className={styles.form}
          onSubmit={(e) => formDispatch({ type: "name", payload: [e] })}
        >
          <div className={styles.formInputContainer}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className={styles.formInput}
              value={name}
              onChange={(e) =>
                formDispatch({ type: "name", payload: [e.target.value] })
              }
            />
            <small>{name ? "" : "this field is required"}</small>
          </div>
          <div className={styles.formInputContainer}>
            <input
              type="text"
              name="surname"
              placeholder="Enter your surname"
              className={styles.formInput}
              value={surname}
              onChange={(e) =>
                formDispatch({ type: "surname", payload: [e.target.value] })
              }
            />
            <small>{surname ? "" : "this field is required"}</small>
          </div>
          <div className={styles.formInputContainer}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={styles.formInput}
              value={email}
              onChange={(e) =>
                formDispatch({ type: "email", payload: [e.target.value] })
              }
            />
            <small>{emailValidation()}</small>
          </div>
          <div className={styles.formInputContainer}>
            <div className={styles.passwCont}>
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Create a password"
                className={styles.formInput}
                value={passw}
                onChange={(e) =>
                  formDispatch({ type: "password", payload: [e.target.value] })
                }
              />
              <div
                className={styles.eyes}
                onClick={(e) => setVisible(!visible)}
              >
                {visible ? <PiEyeLight /> : <PiEyeClosedLight />}
              </div>
            </div>
            <small>{passwordValidation()}</small>
          </div>
          <div className={styles.formInputContainer}>
            <div className={styles.passwCont}>
              <input
                type={visible ? "text" : "password"}
                name="password"
                placeholder="Repeat the password"
                className={styles.formInput}
                value={passw2}
                onChange={(e) =>
                  formDispatch({ type: "password2", payload: [e.target.value] })
                }
              />
              <div
                className={styles.eyes}
                onClick={(e) => {setVisible(!visible)}}
              >
                {visible ? <PiEyeLight /> : <PiEyeClosedLight />}
              </div>
            </div>
            <small>{password2Validation()}</small>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="checkbox"
              className={styles.formInputCheckbox}
              checked={isChecked}
              onChange={(e) =>
                formDispatch({ type: "checkbox", payload: [e.target.value] })
              }
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
    </div>
  );
}

export default SignUpForm;
