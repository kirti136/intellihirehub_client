import { Link } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import "./JobPostingHomePage.css"; // Your CSS file for styling

const JobPostingHomePage = () => {
  return (
    <section className="jobPostingHomePage content">
      <div className="job-posting-header">
        <h1>Welcome Hiring Managers</h1>
        <p>Explore job opportunities and manage postings</p>
        <p>Stay updated with the latest marketing conditions</p>
        {/* Add any extra information for hiring managers */}
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
        {/* Add more options for hiring managers */}
      </div>
    </section>
  );
};

export default JobPostingHomePage;
