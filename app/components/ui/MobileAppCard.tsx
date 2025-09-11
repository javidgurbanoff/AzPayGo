import React from "react";
import styled from "styled-components";

const MobileAppCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span className="small-text">Download Now!</span>
        <span className="title">Get our Mobile App</span>
        <span className="desc">
          Manage your online money easily with AzPayGo mobile banking app for
          iOS &amp; Android.
        </span>

        <div className="buttons">
          <a
            href="https://play.google.com/store/games?hl=en"
            className="button google"
          >
            <span className="icon">
              <svg
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 28.9958V4.9125C4 4.07667 4.48167 3.34 5.19 3L19.1442 16.9542L5.19 30.9083C4.48167 30.5542 4 29.8317 4 28.9958ZM23.5642 21.3742L8.32083 30.1858L20.3483 18.1583L23.5642 21.3742ZM28.31 15.2683C28.7917 15.6508 29.1458 16.2458 29.1458 16.9542C29.1458 17.6625 28.8342 18.2292 28.3383 18.6258L25.0942 20.4958L21.5525 16.9542L25.0942 13.4125L28.31 15.2683ZM8.32083 3.7225L23.5642 12.5342L20.3483 15.75L8.32083 3.7225Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="button-text">
              <span>Get it on</span>
              <span>Google Play</span>
            </div>
          </a>

          <a href="https://www.apple.com/app-store/" className="button apple">
            <span className="icon">
              <svg
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5058 27.625C25.33 29.3817 24.0833 31.0958 22.185 31.1242C20.2866 31.1667 19.6775 30.005 17.5241 30.005C15.3566 30.005 14.6908 31.0958 12.8916 31.1667C11.0358 31.2375 9.6333 29.2967 8.4433 27.5825C6.0208 24.0833 4.16497 17.6375 6.6583 13.3025C7.8908 11.1492 10.1008 9.78916 12.495 9.74666C14.3083 9.71833 16.0366 10.9792 17.1558 10.9792C18.2608 10.9792 20.3575 9.46333 22.5533 9.68999C23.4741 9.73249 26.0525 10.0583 27.71 12.495C27.5825 12.58 24.6358 14.3083 24.6641 17.8925C24.7066 22.1708 28.4183 23.6017 28.4608 23.6158C28.4183 23.715 27.8658 25.6558 26.5058 27.625ZM18.4166 4.95833C19.4508 3.78249 21.165 2.88999 22.5816 2.83333C22.7658 4.49083 22.1 6.16249 21.1083 7.35249C20.1308 8.55666 18.5158 9.49166 16.9291 9.36416C16.7166 7.73499 17.51 6.03499 18.4166 4.95833Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div className="button-text">
              <span>Download from</span>
              <span>App Store</span>
            </div>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    max-width: 380px;
    background: linear-gradient(135deg, #0b1f3a, #1a2b4d);
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    font-family: "Inter", sans-serif;
  }

  .small-text {
    color: #488aec;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 6px;
  }

  .desc {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: #cfd3e1;
    margin-bottom: 16px;
  }

  .buttons {
    display: flex;
    gap: 12px;
  }

  .button {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    flex: 1;
  }

  .button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .button.google {
    background-color: #488aec;
    color: #fff;
  }

  .button.apple {
    background-color: #fff;
    color: #0b1f3a;
  }

  .icon {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-text {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

  .button-text span:first-child {
    font-size: 12px;
    font-weight: 600;
    opacity: 0.85;
  }

  .button-text span:last-child {
    font-size: 16px;
    font-weight: 700;
  }
`;

export default MobileAppCard;
