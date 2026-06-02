import React from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-layout container">
      <aside className="dashboard-sidebar glass-panel">
        <div className="sidebar-header">
          <h3>Admin Portal</h3>
        </div>
        <ul className="sidebar-nav">
          <li className="active">Manage Users</li>
          <li>Manage Providers</li>
          <li>Manage Categories</li>
          <li>Manage Packages</li>
          <li>Approve Listings</li>
          <li>Revenue Analytics</li>
          <li>Reports</li>
          <li>Notifications</li>
          <li>Website Settings</li>
        </ul>
      </aside>
      <main className="dashboard-content glass-panel">
        <h2>Manage Users</h2>
        <p className="text-secondary">Overview of all registered users on the platform.</p>
        
        <div className="dashboard-placeholder">
          <p>Total Users: 24,591</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
