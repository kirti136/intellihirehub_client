import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import "./RegisterForm.css"


const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password,
      });

      console.log(response.data.message);
      alert(response.data.message)
      navigate('/login');

    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
        setTimeout(() => {
          setErrorMessage('');
        }, 5000); // Clear the error message after 5 seconds
      } else {
        console.error('Error during registration:', error);
      }
    }
  };

  return (
    <section className="registerSection">
      <div className='inputDiv'>
        <form onSubmit={handleSubmit}>
          <div className="input flex">
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' /></div>
          <br />
          <div className="input flex">
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
          </div>
          <br />
          <div className="input flex">
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
          </div>
          <br /><br />
          <input className="btn flex" type="submit" value="Register" />
        </form>
        <div className='questionDiv'>
          <p>Already Registered? <Link className="navLink a" to={"/login"}>Login</Link></p>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </section>
  );
};

export default RegisterForm;
