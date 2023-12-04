import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateJobSeekerProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "Inactive", // Default to Inactive
    skills: "",
    experience: "Entry Level",
    bio: "",
    availability: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Handle the two options for Status checkbox
      const updatedStatus = value === "Active" ? "Active" : "Inactive";
      setFormData((prevData) => ({
        ...prevData,
        status: updatedStatus,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/create-job-seeker-profile",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data.message);
      alert(response.data.message);
      alert("Application Submitted");
      navigate("/");
    } catch (error) {
      console.error("Error creating job seeker profile:", error);
      alert(error.response.data.message);
    }
  };

  return (
    <section className="content">
      <div className="jobSeekerDiv">
        <h2>Create Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Status:
            <label>
              Active
              <input
                type="checkbox"
                name="status"
                value="Active"
                checked={formData.status === "Active"}
                onChange={handleChange}
              />
            </label>
            <label>
              Inactive
              <input
                type="checkbox"
                name="status"
                value="Inactive"
                checked={formData.status === "Inactive"}
                onChange={handleChange}
              />
            </label>
          </label>
          <br />
          <br />
          <label>
            Skills:
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Experience:
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior">Senior</option>
            </select>
          </label>
          <br />
          <label>
            Bio:
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </label>
          <br />
          <label>
            Availability:
            <input
              type="date"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Create Profile</button>
        </form>
      </div>
    </section>
  );
};

export default CreateJobSeekerProfile;
