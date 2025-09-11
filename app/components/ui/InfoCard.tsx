import React from "react";
import styled from "styled-components";

type InfoCardProps = {
  title: string;
  description: string;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="first-content">
          <span>{title}</span>
        </div>
        <div className="second-content">
          <span>{description}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 220px;
    height: 280px;
    background: linear-gradient(135deg, #0b1f3a, #1c3559);
    transition: all 0.5s ease;
    border-radius: 16px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.25);
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;
    overflow: hidden;
    position: relative;
  }

  .card:hover {
    cursor: pointer;
    transform: scale(1.08) rotate3d(1, 1, 0, 5deg);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.35),
      0px 0px 20px rgba(11, 31, 58, 0.6);
    background: linear-gradient(135deg, #1c3559, #0b1f3a);
  }

  .first-content,
  .second-content {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    transition: all 0.6s ease;
  }

  .first-content {
    opacity: 1;
    font-size: 1.2rem;
    line-height: 1.4;
  }

  .card:hover .first-content {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }

  .second-content {
    opacity: 0;
    transform: translateY(30px) scale(0.9) rotateX(90deg);
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
  }

  .card:hover .second-content {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
    font-size: 1.1rem;
  }
`;

export default InfoCard;
