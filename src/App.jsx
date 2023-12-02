import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './components/Auth/RegisterForm/RegisterForm';
import LoginForm from './components/Auth/LoginForm/LoginForm';


const App = () => {
  return (
    <div>
      <h1>Welcome to Your App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/home' element={<HomePage />} />
        {/* Add more routes for other components if needed */}
      </Routes>
    </div>
  );
};

export default App;
