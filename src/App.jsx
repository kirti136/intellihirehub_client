import "./app.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterForm from './components/Auth/RegisterForm/RegisterForm';
import LoginForm from './components/Auth/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from "./components/Profile/Profile";



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />


        {/* Add more routes for other components if needed */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
