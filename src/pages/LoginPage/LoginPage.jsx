import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginRetroXP.css";  // ⭐ XP CSS
import axios from "axios";

const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [userId, setuserId] = useState("")
  const navigate = useNavigate();

  const EmailChange = (e) => setEmail(e.target.value);
  const PasswordChange = (e) => setPassword(e.target.value);

  const SubmitChange = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5005/auth/login",{Email,Password})
    console.log(response.data._Id);
    setuserId(response.data._Id)

    
    localStorage.setItem("uniqid",JSON.stringify(userId))
      
 

  
    

  

    
    if (response.status === 200) {
      navigate("/mainpage");
    }

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

          {/* RIGHT SIDE — LOGIN ONLY */}
          <div className="col-12 col-md-6 p-4">
            <h3 className="text-center mb-4 fw-bold xp-heading">Welcome Back</h3>

            <form onSubmit={SubmitChange}>

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
                <small className="float-end text-muted xp-small">Forgot Password?</small>
              </div>

              {/* Remember Me */}
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label xp-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn xp-btn w-100 mb-3">
                Login
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

export default LoginPage;
