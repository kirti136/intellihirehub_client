import { useState } from "react";
import axios from "axios";
import "./CreateJobPosting.css"

const CreateJobPosting = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/create-job-posting",
        {
          job_title: jobTitle,
          status: status,
          start_date: startDate,
          end_date: endDate,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message);
      alert(response.data.message);
      setJobTitle("");
      setStatus("");
      setEndDate("");
      setStartDate("");
    } catch (error) {
      console.error("Error creating job posting:", error);
      if (
        error.response &&
        (error.response.status === 400 ||
          error.response.status === 401 ||
          error.response.status === 500 ||
          error.response.status === 403)
      ) {
        setErrorMessage(error.response.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000); // Clear the error message after 5 seconds
      } else {
        console.error("Error during registration:", error);
      }
    }
  };
 
  return (
    <section className="createJobPostingSection content">
      <div className="jobPostingDiv">
        <h2>Create Job Posting</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Select Status</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Filled">Filled</option>
            </select>
          </label>
          <br />
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <br />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button className="btn" type="submit">Create Job Posting</button>
        </form>
      </div>
    </section>
  );
};

export default CreateJobPosting;
