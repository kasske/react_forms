import Input from "./Input";
import { useInput } from "../hooks/useInput";

import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
  /* using custom useInput hook to outsorce logic */
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    // console.log("submitted");
    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={emailValue}
          onBlur={handleEmailBlur}
          error={emailHasError && "Please enter a valid email"}
        ></Input>

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={passwordValue}
          onBlur={handlePasswordBlur}
          error={passwordHasError && "Please enter a valid password"}
        ></Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
