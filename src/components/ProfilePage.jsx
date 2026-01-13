import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from "../assets/dp.png";

import "../styles/ProfilePageXP.css"; // XP THEME CSS
import { newContext } from "../useContext";
import axios from "axios";

const ProfilePage = () => {
  const [Name, setName] = useState("")
  const userData = useContext(newContext);
  console.log(userData);

  const idOnly = userData.userData._Id;

  console.log(idOnly);

  const navigate = useNavigate();

  const profileFunction = async () =>{
    const profileData = await axios.get(`http://localhost:5005/auth/users/${idOnly}`)
      console.log("profile function",profileData.data.Name);
      setName(profileData.data.Name)

  }
  useEffect(() => {
    profileFunction()
  }, [])

  
  
  
  
  return (
    <div className="xp-wrapper">
      {/* ===== PROFILE HEADER ROW (INSTAGRAM STYLE) ===== */}
      <div className="container xp-profile-header d-flex align-items-center">
        {/* Profile Image */}
        <img src={profileImg} alt="Profile" className="xp-profile-photo" />

        {/* Name + Username */}
        <div className="ms-3">
          <h4 className="xp-name">{Name}</h4>
          <p className="xp-username">@niyaoe</p>
          <button
            onClick={() => {
              navigate("/settings/account");
            }}
            className="xp-btn-editprofile"
          >
            Edit Profile
          </button>
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
