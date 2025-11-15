import React from 'react'
import user from "../assets/nnn.png"
import sample1 from "../assets/20251030_152423.jpg"
import "../styles/LikedPostXP.css";   //  👈 NEW SEPARATE XP CSS FILE

const LikedPost = () => {
  return (
    <div>
      <div className="xp-post-card mb-4">
        <div className="xp-post-header d-flex align-items-center mb-2">
          <img
            src={user}
            alt="user"
            className="xp-user-img me-2"
          />
          <div>
            <h6 className="xp-user-name mb-0">Marcellus Voss</h6>
            <small className="text-muted xp-time">12 hours ago</small>
          </div>
          <span className="xp-badge ms-auto">Lighting</span>
        </div>

        <p className="xp-text mb-2">
          The streetlights on 5th Avenue are flickering on and off randomly.
        </p>

        <div className="text-center">
          <img
            src={sample1}
            alt="Streetlight"
            className="xp-post-image"
          />
        </div>

        <div className="xp-actions mt-2">
          <small><i className="bi bi-hand-thumbs-up"></i> 12</small>
          <small><i className="bi bi-chat"></i> 7</small>
          <small><i className="bi bi-share"></i></small>
        </div>
      </div>
    </div>
  )
}

export default LikedPost
