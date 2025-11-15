import "../styles/AccountInfoXP.css"; // ⭐ XP THEME

export default function AccountInfo() {
  return (
    <div className="xp-account-card">

      <h5 className="xp-account-title">Account Information</h5>

      <form>
        <div className="row g-3">

          <div className="col-md-6">
            <input type="text" className="form-control xp-account-input" placeholder="First Name" />
          </div>

          <div className="col-md-6">
            <input type="text" className="form-control xp-account-input" placeholder="Last Name" />
          </div>

          <div className="col-md-6">
            <input type="text" className="form-control xp-account-input" placeholder="Username" />
          </div>

          <div className="col-md-6">
            <input type="email" className="form-control xp-account-input" placeholder="Email" />
          </div>

          <div className="col-md-6">
            <input type="text" className="form-control xp-account-input" placeholder="Phone Number" />
          </div>

          <div className="col-md-6">
            <select className="form-select xp-account-select">
              <option>City</option>
              <option>New York</option>
              <option>London</option>
              <option>Tokyo</option>
            </select>
          </div>

          <div className="col-12">
            <textarea
              className="form-control xp-account-textarea"
              placeholder="Bio"
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="mt-4 d-flex gap-2">
          <button className="xp-account-btn-save">Save Changes</button>
          <button className="xp-account-btn-logout">Logout</button>
        </div>
      </form>
    </div>
  );
}
