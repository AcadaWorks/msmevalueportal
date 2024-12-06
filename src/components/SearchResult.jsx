import React, { Fragment } from 'react';

export default function SearchResult({ name, image, address, onClick, selected }) {
  return (
    <Fragment>
      <div onClick={onClick} className="row mt-2 align-items-center text-start g-0" style={{ margin: '0', width: '17rem' }}>
        {/* Column for the image placeholder */}
        <div className="col-auto">
          <div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#E9ECEF',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        {/* Column for the content */}
        <div className="col ps-2"> {/* Reduced space with 'ps-2' for padding */}
          <a 
            href="#" 
            className="fw-bold" 
            style={{
              textDecoration: 'none', 
              fontSize: '70%', 
              color: selected ? '#007bff' : '#334155'  // Change title color based on selection
            }}
          >
            {name}
          </a>
          <p className="mb-0" style={{ fontSize: '60%', color: '#334155' }}>
            {address}
          </p>
        </div>
      </div>
    </Fragment>
  );
}
