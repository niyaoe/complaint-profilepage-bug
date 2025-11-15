import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import coverImg from "../assets/banner.jpg";
import profileImg from "../assets/dp.png";
// import "../styles/ProfilePageXP.css"; // XP THEME CSS

const ProfilePage = () => {
  return (
    <div className="xp-page-wrapper">

      {/* ===== XP COVER ===== */}
      <div
        className="xp-cover-photo"
        style={{ backgroundImage: `url(${coverImg})` }}
      >
        <div className="xp-window-bar">Profile - Windows XP</div>
      </div>

      {/* ===== PROFILE CARD ===== */}
      <div className="container xp-profile-card">

        {/* Profile header */}
        <div className="text-center">
          <img
            src={profileImg}
            alt="Profile"
            className="xp-profile-pic"
          />

          <h4 className="xp-profile-name">Niyaoe</h4>
          <p className="xp-profile-username">@niyaoe</p>

          <button className="xp-btn">Edit Profile</button>
        </div>

        {/* ===== XP TABS ===== */}
        <ul className="nav nav-tabs justify-content-center xp-tabs">
          <li className="nav-item">
            <NavLink className="nav-link xp-tab-link" to="/profile" end>
              Posts
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link xp-tab-link" to="/profile/likedpost">
              Likes
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link xp-tab-link" to="/profile/comments">
              Comments
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link xp-tab-link" to="/profile/shares">
              Shares
            </NavLink>
          </li>
        </ul>

        {/* PAGE BODY */}
        <div className="mt-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
