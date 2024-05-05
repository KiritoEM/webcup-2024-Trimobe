/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = (): JSX.Element => {
  const navigate = useNavigate();

  const [name] = useState(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("name");
      return storedName;
    }
    return "";
  });

  const logout = () => {
    localStorage.removeItem("name");
    navigate("/");
  };
  return (
    <header className="dashboard-header">
      <div className="search-bar">
        <img src="/search.webp" alt="" />
        <input type="text" placeholder="Rechercher..." />
      </div>
      <div className="notification" onClick={logout}>
        <img src="/Bell.webp" alt="" />
      </div>
      <div className="user">
        <img src="/default-user.webp" alt="" />
        <p>
          Connecté en tant que <span>{name ? name : "utilsateur"}</span>
        </p>
      </div>
    </header>
  );
};

export default DashboardHeader;
