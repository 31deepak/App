import React, { useState, useEffect } from 'react';
import { getProfiles } from '../services/api'; // Import only what you need
//import '../styles/ProfileDetailsPage.css';

const ProfileDetailsPage = ({ match }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profiles = await getProfiles();
        const selectedProfile = profiles.find((p) => p.id === match.params.id);
        setProfile(selectedProfile);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, [match.params.id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-details-container">
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
      <p>Address: {profile.address}</p>
    </div>
  );
};

export default ProfileDetailsPage;
