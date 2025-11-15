import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/xp-app-preferences.css"; // <-- your external XP theme CSS

export default function AppPreferences() {
  return (
    <div className="xp-pref-card">
      <h5 className="xp-pref-title">App Preferences</h5>

      {/* Dark Mode */}
      <div className="xp-pref-row">
        <span>Dark Mode</span>

        <label className="xp-pref-switch">
          <input type="checkbox" />
          <span className="xp-pref-slider"></span>
        </label>
      </div>

      {/* Languages */}
      <div className="xp-pref-row">
        <span>Languages</span>
        <span className="xp-pref-arrow">›</span>
      </div>

      {/* Accessibility */}
      <div className="xp-pref-row">
        <span>Accessibility Options</span>
        <span className="xp-pref-arrow">›</span>
      </div>

      {/* Feedback */}
      <div className="xp-pref-row xp-last-row">
        <span>Feedback / Help Center</span>
        <span className="xp-pref-arrow">›</span>
      </div>
    </div>
  );
}
