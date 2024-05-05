import { useNavigate } from "react-router-dom";
import { dashboardnavData } from "../../helpers/constants";
import { useState } from "react";

const DashboardNav = (): JSX.Element => {
  const navigate = useNavigate();

  const [name] = useState(() => {
    if (typeof window !== "undefined") {
      const storedName = localStorage.getItem("name");
      return storedName;
    }
    return "";
  });
  return (
    <nav className="dashboard-nav">
      <div className="nav-container">
        <div className="logo">
          <img src="/logo.webp" alt="" />
        </div>
        <div className="nav-items">
          <ul>
            {dashboardnavData.map((item, index) => (
              <li
                key={index}
                id={window.location.pathname === item.url ? "nav-active" : ""}
                onClick={() => navigate(item.url ? item.url : "")}
              >
                <img
                  src={
                    window.location.pathname === item.url
                      ? item.icon_active
                      : item.icon
                  }
                  alt=""
                />{" "}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="line"></div>
        <div className="settings">
          <p>
            <img src="/settings.svg" alt="" /> Paramètres
          </p>
        </div>
        <div className="account">
          <img src="/default-user.webp" alt="" />
          <div className="user-info">
            <h6>{name ? name : "utilisateur"}</h6>
            <p>Paramètres</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
