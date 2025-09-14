import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cookies = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <StyledWrapper>
      <div className="card">
        <div className="cookieIcon">🍪</div>
        <p className="cookieHeading">We use cookies</p>
        <p className="cookieDescription">
          We use cookies to ensure you get the best experience on our website.{" "}
          <a href="#">Read cookies policy</a>.
        </p>
        <div className="buttonContainer">
          <button className="acceptButton" onClick={handleAccept}>
            Allow
          </button>
          <button className="declineButton" onClick={handleDecline}>
            Decline
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 90%;
  transform: translateX(-50%);
  z-index: 1000;

  .card {
    width: 320px;
    background-color: #0b1f3a;
    border-radius: 12px;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  .cookieIcon {
    font-size: 2.5rem;
  }

  .cookieHeading {
    font-size: 1.2em;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }

  .cookieDescription {
    font-size: 0.85em;
    font-weight: 500;
    color: #e0e0e0;
    margin: 0;
    line-height: 1.4;
  }

  .cookieDescription a {
    color: #ffffff;
    font-weight: 600;
  }

  .cookieDescription a:hover {
    text-decoration: underline;
  }

  .buttonContainer {
    display: flex;
    gap: 16px;
    margin-top: 8px;
  }

  .acceptButton {
    width: 90px;
    height: 34px;
    background-color: #fff;
    border: none;
    color: #0b1f3a;
    cursor: pointer;
    font-weight: 600;
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .declineButton {
    width: 90px;
    height: 34px;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    border-radius: 20px;
    transition: all 0.3s ease;
  }

  .acceptButton:hover {
    background-color: #f0f0f0;
  }

  .declineButton:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Cookies;
