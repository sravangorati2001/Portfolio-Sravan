import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  margin: 150px auto;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  transition: all 0.4s ease;
  background: linear-gradient(
    45deg,
  #74ebd5 0%,
  #9face6 70%,
  #74ebd5 100%
  );
  background-size: 200% 200%;
  animation: gradientShift 10s ease infinite;
  padding: 10px; // Added padding to create space for the gradient

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 45px rgba(0,0,0,0.15);
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`;

const ProfileImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px; // Slightly smaller radius for inner image
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;

  ${ImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const GreetingImageDiv = () => {
  return (
    <ImageContainer>
      <ProfileImageWrapper>
        <ProfileImage
          src="https://github.com/user-attachments/assets/281250b0-2121-45f8-b9e9-c133e985772b"
          alt="Sravan Kumar profile"
        />
      </ProfileImageWrapper>
      <OverlayText>Sravan Kumar</OverlayText>
    </ImageContainer>
  );
};

export default GreetingImageDiv;