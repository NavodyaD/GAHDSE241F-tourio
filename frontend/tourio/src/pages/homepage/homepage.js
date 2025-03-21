import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import './homepage.css';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="homepage">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
