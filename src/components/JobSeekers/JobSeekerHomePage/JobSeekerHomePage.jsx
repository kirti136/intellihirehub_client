import Main from "../../Main/Main";
import { Link } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import "./JobSeekerHomePage.css";

function JobSeekerHomePage() {
  return (
    <section className="jobSeekerHomePageSection content">
      <div className="job-posting-header">
        <h1>Welcome To IntelliHireHub</h1>
        <p>Explore job opportunities and discover a path to your future career</p>
        <p>Stay updated with the latest marketing conditions</p>
        {/* Add any extra information for hiring managers */}
      </div>
      <div className="job-posting-options">
        <div className="job-posting-option">
          <Link to="/apply_jobs">
            <div className="option-icon">
              <FiBriefcase />
            </div>
            <h3>Apply for your Dream Jobs</h3>
          </Link>
        </div>
      </div>
      <Main />
    </section>
  );
}

export default JobSeekerHomePage;