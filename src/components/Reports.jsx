import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import user from "../assets/nnn.png";
import sample from "../assets/20251030_151802.jpg";
import sample1 from "../assets/20251030_152423.jpg";
import sample2 from "../assets/20251030_152416.jpg";
import "../styles/ReportsRetro.css";

const Reports = () => {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [liked, setLiked] = useState([false, false, false]);
  const [comments, setComments] = useState([[], [], []]);
  const [commentInputs, setCommentInputs] = useState(["", "", ""]);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    const updatedLiked = [...liked];
    if (updatedLiked[index]) {
      updatedLikes[index] -= 1;
    } else {
      updatedLikes[index] += 1;
    }
    updatedLiked[index] = !updatedLiked[index];
    setLikes(updatedLikes);
    setLiked(updatedLiked);
  };

  const handleCommentChange = (index, value) => {
    const updatedInputs = [...commentInputs];
    updatedInputs[index] = value;
    setCommentInputs(updatedInputs);
  };

  const handleAddComment = (index) => {
    if (commentInputs[index].trim() === "") return;
    const updatedComments = [...comments];
    updatedComments[index] = [
      ...updatedComments[index],
      commentInputs[index].trim(),
    ];
    setComments(updatedComments);
    const updatedInputs = [...commentInputs];
    updatedInputs[index] = "";
    setCommentInputs(updatedInputs);
  };

  const handleShare = (index) => {
    alert(`Post ${index + 1} shared!`);
  };

  const reportsData = [
    {
      name: "Aurelia Kincaid",
      time: "2 hours ago",
      category: "Roads",
      text: "I reported a pothole on Elm Street last week, and it’s still not fixed.",
      img: sample,
    },
    {
      name: "Marcellus Voss",
      time: "12 hours ago",
      category: "Lighting",
      text: "The streetlights on 5th Avenue are flickering on and off randomly.",
      img: sample1,
    },
    {
      name: "Seraphina Arledge",
      time: "15 hours ago",
      category: "Parks",
      text: "Great job on the new park renovations! The community really appreciates it.",
      img: sample2,
    },
  ];

  return (
    <div className="retro-bg" style={{ minHeight: "100vh"}}>
      <div className="container py-4">
        {/* 🔍 Search & Filter Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 gap-2 retro-box p-2">
          <div
            className="input-group retro-input-group"
            style={{ maxWidth: "400px", flexGrow: 1 }}
          >
            <span className="input-group-text retro-input-icon">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control retro-input"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          <div className="dropdown">
            <button
              className="btn retro-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filters
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item">Most Recent</button>
              </li>
              <li>
                <button className="dropdown-item">Most Liked</button>
              </li>
              <li>
                <button className="dropdown-item">Category: Roads</button>
              </li>
              <li>
                <button className="dropdown-item">Category: Safety</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="mb-4 d-flex flex-wrap gap-2">
          {["Roads", "Lighting", "Waste", "Transport", "Parks", "Safety"].map(
            (cat, i) => (
              <span key={i} className="retro-badge px-3 py-2">
                {cat}
              </span>
            )
          )}
        </div>

        {/* Report Cards */}
        <h5 className="mb-3 fw-semibold text-primary">Local Area</h5>

        {reportsData.map((report, index) => (
          <div key={index} className="card mb-4 retro-card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <img
                  src={user}
                  alt="user"
                  className="rounded-circle me-2 user-img"
                />
                <div>
                  <h6 className="mb-0">{report.name}</h6>
                  <small className="text-muted">{report.time}</small>
                </div>
                <span className="badge retro-badge ms-auto">
                  {report.category}
                </span>
              </div>
              <p className="mb-2">{report.text}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={report.img}
                  alt={report.category}
                  className="rounded retro-image"
                />
              </div>

              {/* ✅ Like, Comment, Share Buttons */}
              <div className="d-flex justify-content-between  mt-3 prnt">
                <div>
                <button
                  className={`retro-action-btn ${
                    liked[index] ? "retro-liked" : ""
                  }`}
                  onClick={() => handleLike(index)}
                >
                  {liked[index] ? `Unlike (${likes[index]})` : `Like (${likes[index]})`}
                </button>
                </div>
                <div>
                <button
                  className="btn retro-action-btn"
                  data-bs-toggle="collapse"
                  data-bs-target={`#comments-${index}`}
                >
                  Comments
                   {/* ({comments[index].length}) */}
                </button>
                <button
                  className="btn retro-action-btn"
                  onClick={() => handleShare(index)}
                >
                  Repost
                </button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="collapse mt-3" id={`comments-${index}`}>
                {/* <div className="mb-2">
                  {comments[index].map((c, i) => (
                    <div key={i} className="retro-comment">
                      💬 {c}
                    </div>
                  ))}
                </div> */}
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control form-control-sm me-2"
                    placeholder="Write a comment..."
                    value={commentInputs[index]}
                    onChange={(e) =>
                      handleCommentChange(index, e.target.value)
                    }
                  />
                  <button
                    className="post-btne"
                    onClick={() => handleAddComment(index)}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
