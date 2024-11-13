//In profile tab user can make changes about their information
//Used PUT method here to make changes, Also the changes can be accepted if the user is valid (authentication, authorization)
import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Profile.css';

function Profile() {
  const [profileData, setProfileData] = useState({ name: '', email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const token = document.cookie.split('=')[1];
    try {
      const options=
      {        
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      }
      const response = await fetch('https://apis.ccbp.in/profile', options);
      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };

  return (
    <>
    <form className="form-container" onSubmit={handleUpdate}>
      <h2>Update Profile</h2>
      <input
        className="input-field"
        type="text"
        name="name"
        placeholder="Name"
        value={profileData.name}
        onChange={handleChange}
        required
      />
      <input
        className="input-field"
        type="email"
        name="email"
        placeholder="Email"
        value={profileData.email}
        onChange={handleChange}
        required
      />
      <input
        className="input-field"
        type="password"
        name="password"
        placeholder="New Password"
        value={profileData.password}
        onChange={handleChange}
      />
      <button className="button" type="submit">Update Profile</button>
    </form>
    <button className="button"><Link to="/">Back</Link></button>
    </>
  );
}

export default Profile;
