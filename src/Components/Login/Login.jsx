import { useState } from "react";
import styles from "./Login.module.css";

function Login({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2>log in</h2>
      <p>to your account</p>

      <label className={styles.label} htmlFor="name">
        Name:
      </label>
      <input
        className={styles.input}
        id="name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className={styles.label} htmlFor="email">
        Email:
      </label>
      <input
        className={styles.input}
        id="email"
        type="email"
        placeholder="Enter admin@proffer.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className={styles.label} htmlFor="password">
        Password:
      </label>
      <div className={styles.passwordContainer}>
        <input
          className={styles.input}
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter 123456"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className={styles.eyeBtn}
          onClick={() => setShowPassword(!showPassword)}
        >
          <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
        </button>
      </div>

      <button type="submit" className={styles.btn}>
        Login
      </button>
    </form>
  );
}

export default Login;
