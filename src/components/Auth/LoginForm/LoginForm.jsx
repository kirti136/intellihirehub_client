import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://intellihirehub-server.vercel.app/login", {
        email,
        password,
      });
      const token = response.data.token; // Extract token from response
      const role = response.data.role;
      // Store the token in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      console.log(response);
      alert(response.data.message);
      navigate("/home");
    } catch (error) {
      // alert(error.response.data.message)
      if (
        error.response &&
        (error.response.status === 400 || error.response.status === 401)
      ) {
        setErrorMessage(error.response.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000); // Clear the error message after 5 seconds
      } else {
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <section className="loginSection">
      <div className="loginDiv">
        <form onSubmit={handleSubmit}>
          <div className="input flex">
            <input
              placeholder="Enter E-mail"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input flex">
            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <input className="btn flex" type="submit" value="Login" />
        </form>
        <div className="questionDiv">
          <p>
            New User?{" "}
            <Link className="navLink a" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
