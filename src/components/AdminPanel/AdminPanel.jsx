import React from "react";
import ProfileForm from "./ProfileFrom";
import ProfileList from "./ProfileList";

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ProfileForm />
      <ProfileList />
    </div>
  );
};

export default AdminPanel;
