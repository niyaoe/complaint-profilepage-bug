import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/PrivacySecurityXP.css"; // ⭐ XP THEME

export default function PrivacySecurity() {
  return (
    <div className="xp-privacy-card">

      <h5 className="xp-privacy-title">Privacy & Security</h5>

      {/* Change Password */}
      <div className="xp-privacy-row">
        <span>Change password</span>
        <span className="xp-privacy-arrow">›</span>
      </div>

      {/* Two Factor */}
      <div className="xp-privacy-row">
        <span>Two-Factor Authentication</span>
        <span className="xp-privacy-arrow">›</span>
      </div>

      {/* Location Sharing */}
      <div className="xp-privacy-row">
        <span>Location Sharing</span>

        <label className="xp-privacy-switch">
          <input type="checkbox" />
          <span className="xp-privacy-slider"></span>
        </label>
      </div>

      {/* Data Export */}
      <div className="xp-privacy-row">
        <span>Data export & download</span>
        <span className="xp-privacy-arrow">›</span>
      </div>

      {/* Delete Account */}
      <div className="xp-privacy-row last">
        <span className="xp-privacy-delete">Delete Account</span>
        <span className="xp-privacy-arrow">›</span>
      </div>

    </div>
  );
}
