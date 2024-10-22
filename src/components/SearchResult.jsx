import React, { Fragment } from 'react';

export default function SearchResult() {
  return (
    <Fragment>
      <div className="row  mt-2 align-items-center text-start g-0" style={{ margin: '0', width: '17rem' }}>
        {/* Column for the image placeholder */}
        <div className="col-auto">
          <div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#E9ECEF',
            }}
          ></div>
        </div>

        {/* Column for the content */}
        <div className="col ps-2"> {/* Reduced space with 'ps-2' for padding */}
          <a href="#" className="fw-bold text-primary" style={{ textDecoration: 'none', fontSize: '70%' }}>
            Tele & Co.
          </a>
          <p className="mb-0" style={{ fontSize: '60%', color: '#334155' }}>
            Landmark Towers, 5B Water Corporation RD, VI, Lagos, Nigeria.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
