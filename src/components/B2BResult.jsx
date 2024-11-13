import React, { Fragment } from 'react';

export default function B2BResult() {
  return (
    <Fragment>
      <div
        className="d-flex align-items-center mt-2 text-start"
        style={{
          height: '50px',
          width: '900px',
          borderTop: "1px solid #E2E8F0",
          padding: "5px 0",
          backgroundColor: "white",
        }}
      >
        {/* Image placeholder */}
        <div
          className="me-2"
          style={{
            width: '25px',
            height: '25px',
            backgroundColor: '#E9ECEF',
            borderRadius: "5px",
          }}
        ></div>

        {/* Content section */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <span
            className="fw-bold text-dark"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "inline-block",
              maxWidth: "100%",
            }}
          >
            [Business name can be this long]
          </span>

          <small
            style={{
              fontSize: "0.75rem",
              color: "#64748B",
              fontWeight: 'normal',
              fontFamily: "Inter, sans-serif",
              marginLeft: "5px",
            }}
          >
            <i
              className="bi bi-circle-fill"
              style={{
                color: "#E2E8F0",
                fontSize: "0.5rem",
                marginRight: "5px",
              }}
            ></i>
            Landmark Towers 5B, Water Corporation RD, VI, Lagos, Nigeria.
          </small>
        </div>
      </div>
    </Fragment>
  );
}
