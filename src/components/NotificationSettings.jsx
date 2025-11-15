import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NotificationSettingsXP.css"; // ⭐ XP THEME

export default function NotificationSettings() {
  return (
    <div className="xp-notify-card">

      <h5 className="xp-notify-title">Notification Settings</h5>

      {/* Email Notifications */}
      <div className="xp-notify-row">
        <span>Email notifications</span>
        <label className="xp-notify-switch">
          <input type="checkbox" />
          <span className="xp-notify-slider"></span>
        </label>
      </div>

      {/* SMS Notifications */}
      <div className="xp-notify-row">
        <span>SMS notifications</span>
        <label className="xp-notify-switch">
          <input type="checkbox" />
          <span className="xp-notify-slider"></span>
        </label>
      </div>

      {/* Push Notifications */}
      <div className="xp-notify-row">
        <span>Push notifications</span>
        <label className="xp-notify-switch">
          <input type="checkbox" />
          <span className="xp-notify-slider"></span>
        </label>
      </div>

      {/* Weekly Report */}
      <div className="xp-notify-row last">
        <span>Weekly summary report</span>
        <span className="xp-notify-arrow">›</span>
      </div>

    </div>
  );
}
