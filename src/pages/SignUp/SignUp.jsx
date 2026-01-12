import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginRetroXP.css"; // ⭐ XP CSS
import axios from "axios";

const SignUp = () => {
  const [Name, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const FullNameChange = (e) => setFullName(e.target.value);
  const EmailChange = (e) => setEmail(e.target.value);
  const PasswordChange = (e) => setPassword(e.target.value);
  const ConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const SubmitChange = async (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const response = await axios.post("http://localhost:5005/auth/register",{Name,Email,Password})

    if (response.status === 200){
      navigate("/login")
    }
    

    // Example basic validation (keep or remove – your choice)
    

    
    
  };

  return (
    <div className="xp-bg d-flex align-items-center justify-content-center min-vh-100 py-4">
      <div className="container xp-window p-4 shadow-lg rounded">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center p-4 xp-left-border">
            <h1 className="display-5 fw-bold xp-title">NexTown.in</h1>
            <p className="mt-3 xp-text">
              Observe, Organize and Report.  
              Let’s make a difference together 🌍
            </p>
          </div>

          {/* RIGHT SIDE — SIGNUP */}
          <div className="col-12 col-md-6 p-4">
            <h3 className="text-center mb-4 fw-bold xp-heading">Create Account</h3>

            <form onSubmit={SubmitChange}>

              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label xp-label">Full Name</label>
                <input
                  value={Name}
                  onChange={FullNameChange}
                  type="text"
                  className="form-control xp-input"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label xp-label">Email</label>
                <input
                  value={Email}
                  onChange={EmailChange}
                  type="email"
                  className="form-control xp-input"
                  placeholder="Enter email address"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label xp-label">Password</label>
                <input
                  value={Password}
                  onChange={PasswordChange}
                  type="password"
                  className="form-control xp-input"
                  placeholder="Enter password"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label className="form-label xp-label">Confirm Password</label>
                <input
                  value={ConfirmPassword}
                  onChange={ConfirmPasswordChange}
                  type="password"
                  className="form-control xp-input"
                  placeholder="Re-enter password"
                />
              </div>

              {/* Sign Up Button */}
              <button type="submit" className="btn xp-btn w-100 mb-3">
                Sign Up
              </button>

              {/* Continue With */}
              <div className="text-center xp-small mb-3">or continue with</div>

              <div className="d-flex justify-content-center gap-3 mb-3">
                <button type="button" className="xp-icon-btn rounded-circle">G</button>
                <button type="button" className="xp-icon-btn rounded-circle">A</button>
                <button type="button" className="xp-icon-btn rounded-circle">F</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
