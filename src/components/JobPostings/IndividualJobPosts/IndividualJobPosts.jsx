import { useState, useEffect } from "react";
import axios from "axios";

const IndividualJobPosts = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [otherJobPostings, setOtherJobPostings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editJob, setEditJob] = useState(null);

  useEffect(() => {
    // Fetch job postings created by logged in users
    const fetchJobPostings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/my-job-postings",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setJobPostings(response.data.job_postings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job postings:", error);
        alert(error.response.data.message);
        setLoading(false);
      }
    };

    // Fetch job postings created by other users
    const fetchOtherJobPostings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/other-job-postings", // Endpoint to retrieve other user's job postings
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setOtherJobPostings(response.data.job_postings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching other job postings:", error);
        setLoading(false);
      }
    };

    fetchOtherJobPostings();
    fetchJobPostings();
  }, []);

  const handleEdit = (job) => {
    setEditJob(job);
  };

  const handleCancelEdit = () => {
    setEditJob(null);
  };

  const handleUpdateJobPosting = async (jobId, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/update-job-posting/${jobId}`,
        updatedData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert(response.data.message);
      // Update the job postings after successful update
      const updatedPostings = jobPostings.map((job) =>
        job._id === jobId ? { ...job, ...updatedData } : job
      );
      setJobPostings(updatedPostings);
      setEditJob(null); // Close the edit form after successful update
    } catch (error) {
      console.error("Error updating job posting:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <section className="content">
      <div>
        <h2>My Job Postings</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {jobPostings.length > 0 ? (
              <ul>
                {jobPostings.map((job) => (
                  <li key={job._id}>
                    {editJob === job ? (
                      <div>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleUpdateJobPosting(job._id, {
                              job_title: e.target.jobTitle.value,
                              status: e.target.status.value,
                              start_date: e.target.startDate.value,
                              end_date: e.target.endDate.value,
                            });
                          }}
                        >
                          <input
                            type="text"
                            name="jobTitle"
                            defaultValue={job.job_title}
                          />
                          <select name="status" defaultValue={job.status}>
                            <option value="">Select Status</option>
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Filled">Filled</option>
                          </select>
                          <input
                            type="date"
                            name="startDate"
                            defaultValue={job.start_date}
                          />
                          <input
                            type="date"
                            name="endDate"
                            defaultValue={job.end_date}
                          />
                          <button type="submit">Update</button>
                          <button type="button" onClick={handleCancelEdit}>
                            Cancel
                          </button>
                        </form>
                      </div>
                    ) : (
                      <div>
                        {/* <strong>Job Id:</strong> {job._id} */}
                        {/* <br /> */}
                        <strong>Job Title:</strong> {job.job_title}
                        <br />
                        <strong>Status:</strong> {job.status}
                        <br />
                        <strong>Start Date:</strong> {job.start_date}
                        <br />
                        <strong>End Date:</strong> {job.end_date}
                        <br />
                        <button onClick={() => handleEdit(job)}>Edit</button>
                      </div>
                    )}
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

      <div>
        {/* Display job postings by other users */}
        <h2>Other Job Postings</h2>
        <div>
          {otherJobPostings.length > 0 ? (
            <ul>
              {otherJobPostings.map((otherJob) => (
                <li key={otherJob._id}>
                  {/* Render job postings from other users */}
                  <strong>Job Title:</strong> {otherJob.job_title}
                  <br />
                  <strong>Status:</strong> {otherJob.status}
                  <br />
                  <strong>Start Date:</strong> {otherJob.start_date}
                  <br />
                  <strong>End Date:</strong> {otherJob.end_date}
                  <br />
                  {/* Add any other necessary information */}
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          ) : (
            <p>No other job postings available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndividualJobPosts;
