import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AllJobPostings.css";

const AllJobPostings = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get(
          "https://intellihirehub-server.vercel.app/all-job-postings"
        );
        setJobPostings(response.data.job_postings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job postings:", error);
        setLoading(false);
      }
    };

    fetchJobPostings();
  }, []);

  const handleApply = (jobId, status) => {
    // Redirect to Create Job Seeker Profile page with job ID if status is not 'Filled'
    if (status !== "Filled") {
      navigate(`/apply_jobs`);
    }
  };

  return (
    <section className="content">
      <div className="jobPostingsContainer">
        <h2 style={{textAlign:"center"}}>All Job Postings</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="jobList">
            {jobPostings.length > 0 ? (
              <ul>
                {jobPostings.map((job) => (
                  <li key={job._id}>
                    <div className="jobDetails">
                      <strong>Job Title:</strong> {job.job_title}
                      <br />
                      <strong>Status:</strong> {job.status}
                      <br />
                      <strong>Start Date:</strong> {job.start_date}
                      <br />
                      <strong>End Date:</strong> {job.end_date}
                    </div>
                    <div className="jobButtons">
                      {job.status === "Filled" ? (
                        <p style={{ fontWeight: "bold", color: "red" }}>
                          Application Closed
                        </p>
                      ) : (
                        <div>
                          <button
                            className="btn"
                            onClick={() => handleApply(job._id, job.status)}
                          >
                            Apply
                          </button>
                          <br />
                          <button className="btn">Details</button>
                        </div>
                      )}
                    </div>
                    <br />
                    <br />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No job postings available.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllJobPostings;
