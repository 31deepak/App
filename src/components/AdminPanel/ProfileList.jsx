import React, { useEffect, useState } from "react";
import { getProfiles, deleteProfile } from "../../services/api";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const data = await getProfiles();
    setProfiles(data);
  };

  const handleDelete = async (id) => {
    await deleteProfile(id);
    fetchProfiles();
  };

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name}
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
