import React, { Fragment } from 'react';

export default function BusinessCard() {
  return (
    <Fragment>
      <div
        className="d-flex align-items-start mt-2 text-start"
        style={{
          height: '100px',
          width: '800px',
          border: "1px solid #E2E8F0",
          borderRadius: "5px",
          padding: "15px",
          backgroundColor: "white",
          overflow:"hidden"
        }}
      >
        {/* Image placeholder */}
        <div
          className="me-3"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#E9ECEF',
            borderRadius: "5px"
          }}
        ></div>

        {/* Content section with scrollable overflow */}
        <div className='text-start' style={{ flex: 1, overflowY: 'hidden', maxHeight: '100px' }}>
          <a
            href="#"
            className="fw-bold text-dark"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}
          >
            Forward Implementation Consultant
          </a>
          <p className="mb-1" style={{ fontSize: "0.7rem", color: "#6B7280", fontFamily: "interBold" }}>
            <i className="bi bi-house-fill"></i> &nbsp; [Business Category] &nbsp; &nbsp;
            <i className="bi bi-telephone-fill"></i>&nbsp; [Phone_number]
          </p>
          <p className="mb-1" style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 'bold', fontFamily: "interBold" }}>
            <i className="bi bi-geo-alt-fill"></i> Landmark Towers, 5B Water Corporation RD, VI, Lagos, Nigeria.
          </p>
          <p className="mb-0" style={{ fontSize: "0.5rem", color: "#68727D" }}>
            Invite building sky staircase shark. Hard Backend version vendor knowledge creep market on.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
