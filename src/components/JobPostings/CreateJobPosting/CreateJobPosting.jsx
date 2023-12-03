import { useState } from 'react';
import axios from 'axios';

const CreateJobPosting = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [status, setStatus] = useState('Open');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/create-job-posting', {
        job_title: jobTitle,
        status: status,
        start_date: startDate,
        end_date: endDate
      }, {
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data.message);
      // Add code here for further actions upon successful job posting creation
    } catch (error) {
      console.error('Error creating job posting:', error);
      // Handle error messages or display notifications to the user
    }
  };

  return (
    <div>
      <h2>Create Job Posting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type='text'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value='Open'>Open</option>
            <option value='In Progress'>In Progress</option>
            <option value='Filled'>Filled</option>
          </select>
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type='date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type='date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type='submit'>Create Job Posting</button>
      </form>
    </div>
  );
};

export default CreateJobPosting;