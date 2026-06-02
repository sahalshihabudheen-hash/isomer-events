import React from 'react';
import './Dashboard.css'; // Shared dashboard css

const UserDashboard = () => {
  return (
    <div className="dashboard-layout container">
      <aside className="dashboard-sidebar glass-panel">
        <div className="sidebar-header">
          <h3>User Portal</h3>
        </div>
        <ul className="sidebar-nav">
          <li className="active">My Bookings</li>
          <li>Saved Packages</li>
          <li>Favorites</li>
          <li>Notifications</li>
          <li>Reviews</li>
          <li>Profile Settings</li>
        </ul>
      </aside>
      <main className="dashboard-content glass-panel">
        <h2>My Bookings</h2>
        <p className="text-secondary">You have no upcoming bookings.</p>
        
        {/* Placeholder for future features */}
        <div className="dashboard-placeholder">
          <p>Book your next event to see it here.</p>
          <button className="btn btn-primary mt-4">Browse Services</button>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
