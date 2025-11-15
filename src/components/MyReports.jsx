import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/myreport.css"; // 👈 Windows XP theme stylesheet

const MyReport = () => {
  return (
    <div className="xp-bg" style={{ minHeight: "100vh",marginTop:"50px"}}>
      <div className="container py-4 mb-5">

        {/* Welcome Section */}
        <div className="text-start mb-4">
          <h4 className="fw-semibold xp-heading">Welcome, NIYAS!</h4>
          <p className="xp-subtext">Here’s how your reports are performing today.</p>
        </div>

        {/* Stats Section */}
        <div className="row g-3 mb-4">
          <div className="col-md-4 col-sm-12">
            <div className="card text-center xp-card p-3">
              <h6>Active Reports</h6>
              <h4 className="text-success fw-bold">1</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card text-center xp-card p-3">
              <h6>Resolved Reports</h6>
              <h4 className="text-success fw-bold">2</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card text-center xp-card p-3">
              <h6>Pending Reports</h6>
              <h4 className="text-warning fw-bold">1</h4>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row g-4">

          {/* Left Table Section */}
          <div className="col-lg-8 col-md-12">
            <div className="card xp-card p-3">

              <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">

                <input
                  type="text"
                  className="form-control xp-input w-auto flex-grow-1"
                  placeholder="Search for Issues"
                />

                {/* Filter Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn xp-btn dropdown-toggle"
                    type="button"
                    id="filterDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-funnel"></i> Filters
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><button className="dropdown-item">All Reports</button></li>
                    <li><button className="dropdown-item">Active</button></li>
                    <li><button className="dropdown-item">Resolved</button></li>
                    <li><button className="dropdown-item">Pending</button></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-danger">Clear Filters</button></li>
                  </ul>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-hover align-middle xp-table">
                  <thead className="table-primary xp-table-head">
                    <tr>
                      <th>Issue Title</th>
                      <th>Category</th>
                      <th>Date Submitted</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Broken Streetlight</td>
                      <td><span className="badge bg-success">Lighting</span></td>
                      <td>Aug 5, 2025</td>
                      <td><span className="badge bg-warning text-dark">In Progress</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>Overflowing Trash Bin</td>
                      <td><span className="badge bg-success">Waste</span></td>
                      <td>Aug 3, 2025</td>
                      <td><span className="badge bg-success">Resolved</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>Road Pothole</td>
                      <td><span className="badge bg-info text-dark">Roads</span></td>
                      <td>Aug 1, 2025</td>
                      <td><span className="badge bg-danger">Pending</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>Security Issue</td>
                      <td><span className="badge bg-secondary">Safety</span></td>
                      <td>Jul 28, 2025</td>
                      <td><span className="badge bg-success">Resolved</span></td>
                      <td>
                        <i className="bi bi-pencil-square text-primary me-2"></i>
                        <i className="bi bi-trash text-danger"></i>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>
          </div>

          {/* Right Form Section */}
          <div className="col-lg-4 col-md-12">
            <div className="card xp-card p-3">

              <div className="text-center xp-photo-box p-4 mb-3">
                <i className="bi bi-image fs-1 text-primary"></i>
                <p className="small xp-subtext mt-2 mb-0">Add Photo</p>
              </div>

              <form>
                <div className="mb-3">
                  <input type="text" className="form-control xp-input" placeholder="Title" />
                </div>

                <div className="mb-3">
                  <select className="form-select xp-input">
                    <option>Category</option>
                    <option>Lighting</option>
                    <option>Roads</option>
                    <option>Safety</option>
                    <option>Waste</option>
                  </select>
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control xp-input"
                    placeholder="Briefly describe the issue..."
                    rows="3"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <input type="text" className="form-control xp-input" placeholder="Location" />
                </div>

                <button type="submit" className="btn xp-btn w-100 fw-semibold">
                  Submit
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyReport;
