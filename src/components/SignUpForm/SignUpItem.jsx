import React from "react";
import { PiEyeLight, PiEyeClosedLight } from "react-icons/pi";
import { useState } from "react";
import styles from "./SignUpForm.module.css";

function SignUpItem(props) {
  const {
    errorMessage,
    visibleHandler,
    isVisible,
    onChange,
    id,
    ...inputProps
  } = props;
  const [focused, setFocused] = useState(false);

  const focusHandler = () => {
    setFocused(true);
  };

  return (
    <div className={styles.formInputContainer}>
      <input
        onChange={onChange}
        className={styles.formInput}
        required
        {...inputProps}
        onBlur={focusHandler}
        focused={focused.toString()}
        onFocus={() => inputProps.name === "passw2" && setFocused(true)}
      />
      <small className={styles.error}>{errorMessage}</small>
      {inputProps.name === "passw" && (
        <div className={styles.eyes} onClick={visibleHandler}>
            {isVisible ? <PiEyeLight /> : <PiEyeClosedLight/>}
        </div>
      )}
    </div>
  );
}

export default SignUpItem;
