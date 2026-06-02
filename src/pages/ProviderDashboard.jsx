import React from 'react';
import './Dashboard.css';

const ProviderDashboard = () => {
  return (
    <div className="dashboard-layout container">
      <aside className="dashboard-sidebar glass-panel">
        <div className="sidebar-header">
          <h3>Provider Portal</h3>
        </div>
        <ul className="sidebar-nav">
          <li className="active">Service Management</li>
          <li>Booking Requests</li>
          <li>Earnings</li>
          <li>Analytics</li>
          <li>Calendar</li>
          <li>Customer Messages</li>
        </ul>
      </aside>
      <main className="dashboard-content glass-panel">
        <h2>Service Management</h2>
        <p className="text-secondary">Manage your packages and offerings.</p>
        
        <div className="dashboard-placeholder">
          <button className="btn btn-primary mt-4">Add New Service</button>
        </div>
      </main>
    </div>
  );
};

export default ProviderDashboard;
