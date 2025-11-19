import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from "../assets/dp.png";

import "../styles/ProfilePageXP.css"; // XP THEME CSS

const ProfilePage = () => {

  const navigate = useNavigate()
  return (
    <div className="xp-wrapper">

      {/* ===== PROFILE HEADER ROW (INSTAGRAM STYLE) ===== */}
      <div className="container xp-profile-header d-flex align-items-center">

        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Profile"
          className="xp-profile-photo"
        />

        {/* Name + Username */}
        <div className="ms-3">
          <h4 className="xp-name">Niyas PT</h4>
          <p className="xp-username">@niyaoe</p>
          <button onClick={()=>{navigate('/settings/account')}} className="xp-btn-editprofile">Edit Profile</button>
        </div>

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

      {/* ===== PAGE BODY ===== */}
      <div className="mt-4 container">
        <Outlet />
      </div>

    </div>
  );
};

export default ProfilePage;
