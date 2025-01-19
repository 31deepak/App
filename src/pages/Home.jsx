import React, { useEffect, useState } from 'react';
import { getProfiles } from '../services/api'; // Import only what you need
import '../styles/Home.css';

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await getProfiles();
        setProfiles(data);
      } catch (error) {
        console.error('Failed to fetch profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="home-container">
      <h1>Profile List</h1>
      <div className="profile-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
