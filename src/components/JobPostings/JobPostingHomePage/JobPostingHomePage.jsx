import { Link } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import "./JobPostingHomePage.css"; // Your CSS file for styling

const JobPostingHomePage = () => {
  return (
    <section className="job-posting-homepage content">
      <div className="job-posting-header">
        <h1>Welcome to Job Portal</h1>
        <p>Find the best job opportunities</p>
      </div>
      <div className="job-posting-options">
        <div className="job-posting-option">
          <Link to="/create_job">
            <div className="option-icon">
              <FiBriefcase />
            </div>
            <h3>Create Job Posting</h3>
          </Link>
        </div>
        {/* Add more options for job seekers or managers */}
      </div>
    </section>
  );
};

export default JobPostingHomePage;
