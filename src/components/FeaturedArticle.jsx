import React from 'react';
import newsman from '../assets/images/newsman.jpeg';
import avatar from '../assets/images/avatar.jpeg';

function FeaturedArticle() {
  return (
    <div className="mb-4 mt-3 text-white" style={{ border: "none" }}>
      <div
        className="card-img-overlay d-flex flex-column justify-content-end"
        style={{
          backgroundImage: `url(${newsman})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: '450px',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
          }}
        ></div>

        {/* Content */}
        <div
          className="content text-start"
          style={{ position: 'relative', zIndex: 1, padding: '20px' }}
        >
          <h2 className="fw-bold mb-2" style={{ fontSize: '22px' }}>
            Improve your design skills: Develop an "eye" for design
          </h2>
          <p className="mb-3" style={{ fontSize: '12px' }}>
            Tools and trends change, but good design is timeless. Learn how to quickly develop an "eye" for design.
          </p>
          <div className="d-flex align-items-center">
            <img
              src={avatar}
              className="rounded-circle me-2"
              alt="Author"
              style={{ width: '30px', height: '30px' }}
            />
            <div className="d-flex flex-column">
              <span style={{ fontSize: '12px',color:"white" }}>UX Design team</span>
              <small  style={{ fontSize: '11px',color:"white" }}>20 Jan 2022</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticle;
