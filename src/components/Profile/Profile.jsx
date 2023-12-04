import { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
// import CreateJobSeekerProfile from "../JobSeekers/CreateJobSeekerProfile/CreateJobSeekerProfile";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const token = localStorage.getItem("token");
  // const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (token) {
          const response = await axios.get(
            "http://localhost:5000/user-details",
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );
          setUserDetails(response.data.user_details);
          setFormData({
            name: response.data.user_details.name,
            email: response.data.user_details.email,
          });
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails(); // Fetch user details only if token exists
  }, [token]); // Dependency on token ensures this effect runs when the token changes

  const handleEditOpen = () => {
    setEditing(true);
  };
  const handleEditClose = () => {
    setEditing(false);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:5000/user-details",
        formData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setUserDetails(response.data.user_details);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <section className="profileSection content">
      {token ? (
        userDetails ? (
          <div className="profileDiv">
            {editing ? (
              <form className="editForm" onSubmit={handleSubmit}>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="btnDiv">
                  <button className="btn" type="submit">
                    Save
                  </button>
                  <button className="btn" onClick={handleEditClose}>
                    Close
                  </button>
                </div>
              </form>
            ) : (
              <div className="details">
                <p>ID: {userDetails.id}</p>
                <p>Name: {userDetails.name}</p>
                <p>Email: {userDetails.email}</p>
                <p>Role: {userDetails.role}</p>
                <button className="btn" onClick={handleEditOpen}>
                  Edit
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>Loading user details...</p>
        )
      ) : (
        <p>Please login to view your profile.</p>
      )}
      {/* <hr /> */}

      {/* {role == "job seeker" ? <CreateJobSeekerProfile /> : null} */}
    </section>
  );
};

export default Profile;
