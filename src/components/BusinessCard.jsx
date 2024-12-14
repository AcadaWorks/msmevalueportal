import React, { Fragment } from 'react';

export default function BusinessCard({ 
  title, 
  category, 
  phoneNumber, 
  address, 
  description,
  photoReference
}) {
  const base_url = import.meta.env.VITE_API_BASE_URL;
  console.log(base_url)
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
          overflow: "hidden"
        }}
      >
        {/* Image section */}
        <div
          className="me-3"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: "5px",
            overflow: "hidden",
            backgroundColor: photoReference ? "transparent" : "#E9ECEF"
          }}
        >
          {photoReference ? (
            <img
              src={`${base_url}/photo?photoreference=${photoReference}`}
              alt="Business"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px"
              }}
            />
          ) : null}
        </div>

        {/* Content section */}
        <div className="text-start" style={{ flex: 1, overflowY: 'hidden', maxHeight: '100px' }}>
          <a
            href="#"
            className="fw-bold text-dark"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "0.9rem"
            }}
          >
            {title}
          </a>
          <p className="mb-1" style={{ fontSize: "0.7rem", color: "#6B7280", fontFamily: "interBold" }}>
            <i className="bi bi-house-fill"></i> &nbsp; {category} &nbsp; &nbsp;
            <i className="bi bi-telephone-fill"></i>&nbsp; {phoneNumber}
          </p>
          <p className="mb-1" style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 'bold', fontFamily: "interBold" }}>
            <i className="bi bi-geo-alt-fill"></i> {address}
          </p>
          <p className="mb-0" style={{ fontSize: "0.5rem", color: "#68727D" }}>
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
}
