import React from "react";
import styled from "styled-components";

const SearchRatio = () => {
  return (
    <StyledWrapper>
      <div className="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>
        <input
          id="query"
          className="input"
          type="search"
          placeholder="Axtar..."
          name="searchbar"
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .group {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 210px;

    @media (min-width: 768px) {
      max-width: 300px;
    }
  }

  .input {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    height: 40px;
    padding-left: 2.5rem; /* keeps space for icon */
    border: 0;
    border-radius: 8px; /* slightly smaller */
    background-color: #0b1f3a;
    color: #bdbecb;
    outline: none;
    transition: all 0.25s ease;
    cursor: text;
    z-index: 0;
    box-shadow: 0 0 0 #2b2c37, 0 0 15px -8px #000; /* softer shadow */
  }

  .input::placeholder {
    color: #7d8590;
  }

  .input:hover {
    box-shadow: 0 0 3px #2f81f7; /* softer hover glow */
  }

  .input:focus {
    transform: scale(1.01); /* smaller focus scaling */
    box-shadow: 0 0 0 1.5px #2f81f7; /* smaller focus border */
  }

  .input:focus-visible {
    outline: 2px solid #2f81f7;
  }

  .search-icon {
    position: absolute;
    left: 1rem;
    fill: #bdbecb;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    z-index: 1;
  }

  .group:focus-within .search-icon {
    color: #2f81f7;
  }
`;

export default SearchRatio;
