import React from "react";

const Dashboard = ({ user }) => {
  return (
    <section className="dashboard">
      <h2 className="greeting">
        hello, <span className="user-name">{user?.name}!</span>
      </h2>
    </section>
  );
};

export default Dashboard;
