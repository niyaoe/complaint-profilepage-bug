import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNavbar from "../../components/NewNavbar";
import MobileTopbar from "../../components/MobileTopbar";
import "./SettingsLayoutXP.css";   // 🌟 NEW XP THEME CSS

export default function SettingsLayout() {
  return (
    <div className="xp-settings-wrapper">
      <MobileTopbar />
      <NewNavbar />

      <div className="container-fluid xp-settings-container">
        <div className="row">

          {/* XP Sidebar */}
          <div className="col-12 col-md-3 col-lg-2 xp-settings-sidebar">
            <h6 className="fw-bold mb-3 d-none d-md-block xp-sidebar-title">
              Settings
            </h6>

            <ul className="nav flex-md-column flex-row gap-2 justify-content-center xp-settings-list">
              <li>
                <NavLink to="account" className="xp-settings-link nav-link">
                  Account Info
                </NavLink>
              </li>

              <li>
                <NavLink to="notifications" className="xp-settings-link nav-link">
                  Notification Settings
                </NavLink>
              </li>

              <li>
                <NavLink to="privacy" className="xp-settings-link nav-link">
                  Privacy & Security
                </NavLink>
              </li>

              <li>
                <NavLink to="preferences" className="xp-settings-link nav-link">
                  App Preferences
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Main content */}
          <div className="col p-4 xp-settings-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
