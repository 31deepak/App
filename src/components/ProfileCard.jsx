import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProfileCard.css";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={() => navigate(`/profile/${profile.id}`)}>Summary</button>
    </div>
  );
};

export default ProfileCard;
