import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./LoginForm.css"

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const token = response.data.token; // Extract token from response

      // Store the token in local storage
      localStorage.setItem('token', token);

      console.log(response.data.message);
      alert(response.data.message)
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <section className="loginSection">
      <div className="loginDiv" >
        <form onSubmit={handleSubmit}>
          <div className="input flex">
            <input placeholder='Enter E-mail' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          </div>
          <div className="input flex">
            <input placeholder='Enter Password' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
          </div>
          <input className="btn flex" type="submit" value="Login" />
        </form>
        <div className='questionDiv'>
          <p>New User? <Link className="navLink a" to={"/register"}>Register</Link></p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
