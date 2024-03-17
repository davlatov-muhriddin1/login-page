import React from "react";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-apple"></i>
          </div>

          <p className="divider">
            <span>or</span>
          </p>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="Enter Your E-mail" />
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" />

            <div className="remember">
              <input type="checkbox" checked />
              <p>Remember me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget your password</p>
            <a href="/">Reset Password</a>
          </div>  
          <p>Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Loght Theme</h2>
          <i className="fas fa-toggle-on" onClick={switchTheme}></i>
        </div>
      </div>
    </div>
  );
}

export default App;
