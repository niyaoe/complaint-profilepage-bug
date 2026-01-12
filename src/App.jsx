import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyReportPage from "./pages/MyReportPage";
import ReportsPage from "./pages/ReportsPage";
import ContactPage from "./pages/contactpage/ContactPage";
import BeforeLoginPage from "./pages/BeoreLoginPage";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import LikedPost from "./components/LikedPost";
import ProfilePage from "./components/ProfilePage";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Shares from "./components/Shares";
import SettingsLayout from "./pages/SettingsLayout/SettingsLayout";
import AccountInfo from "./components/AccountInfo";
import NotificationSettings from "./components/NotificationSettings";
import PrivacySecurity from "./components/PrivacySecurity";
import AppPreferences from "./components/AppPreferences";
import SignUp from "./pages/SignUp/SignUp";
import UseContext from "./useContext";

function App() {
  const [MainLogin, setMainLogin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BeforeLoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/l" element={<UseContext/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/myreports" element={<MyReportPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Posts />} /> {/* posts component */}
            <Route path="likedpost" element={<LikedPost />} />
            <Route path="comments" element={<Comments />} />
            <Route path="shares" element={<Shares />} />
          </Route>
          <Route path="/settings" element={<SettingsLayout />}>
            <Route path="account" element={<AccountInfo />} />
            <Route path="notifications" element={<NotificationSettings />} />
            <Route path="privacy" element={<PrivacySecurity />} />
            <Route path="preferences" element={<AppPreferences />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
