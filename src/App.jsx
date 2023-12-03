import "./app.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterForm from "./components/Auth/RegisterForm/RegisterForm";
import LoginForm from "./components/Auth/LoginForm/LoginForm";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProfilePage from "./pages/ProfilePage";
import CreateJobPosting from "./components/JobPostings/CreateJobPosting/CreateJobPosting";
import IndividualJobPosts from "./components/JobPostings/IndividualJobPosts/IndividualJobPosts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create_job" element={<CreateJobPosting />} />
        <Route path="/individual_job_posts" element={<IndividualJobPosts />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
