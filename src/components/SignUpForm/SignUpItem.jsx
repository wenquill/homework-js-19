import React from "react";
import { useState } from "react";
import styles from "./SignUpForm.module.css";

// pattern, placeholder, type, name, value

function SignUpItem(props) {
  const { errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const focusHandler = (e) => {
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
      />
      <small className={styles.error}>{errorMessage}</small>
    </div>
  );
}

export default SignUpItem;
