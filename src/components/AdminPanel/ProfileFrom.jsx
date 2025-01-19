import React, { useState } from "react";
import { addProfile } from "../../services/api";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    description: "",
    address: "",
    image: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProfile(profile);
    setProfile({ name: "", description: "", address: "", image: "" });
    alert("Profile added successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={profile.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={profile.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={profile.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={profile.image}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default ProfileForm;
