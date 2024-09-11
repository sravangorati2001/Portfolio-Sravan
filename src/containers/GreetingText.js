import React from 'react';
import styled, { keyframes } from 'styled-components';

const GreetingTextContainer = styled.div`
  color: ${props => props.theme.secondaryText};
  margin-bottom: 50px;
  text-align: center;
`;

const MainQuote = styled.h2`
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.2;
  letter-spacing: -0.5px;
  position: relative;
  
  &::before, &::after {
    content: '"';
    font-size: 1.5em;
    position: absolute;
    opacity: 0.3;
  }

  &::before {
    left: -20px;
    top: -10px;
  }

  &::after {
    right: -20px;
    bottom: -30px;
  }
`;

const flowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SkillsList = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #3494E6, #EC6EAD, #3494E6);
  background-size: 200% 200%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${flowAnimation} 5s ease infinite;
  margin-top: 20px;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
`;

const SkillItem = styled.span`
  display: inline-block;
  transition: transform 0.3s ease, opacity 0.3s ease;

 
`;

const GreetingText = ({ theme }) => {
    const skills = ["Design", "Architect", "Develop", "Test", "Deploy", "Scale"];

    return (
        <GreetingTextContainer theme={theme}>
            <MainQuote>
                Building Something people truly want.
            </MainQuote>
            <SkillsList>
                {skills.map((skill, index) => (
                    <React.Fragment key={index}>
                        <SkillItem>{skill}</SkillItem>
                        {index < skills.length - 1 && <span style={{ margin: '0 5px' }}>•</span>}
                    </React.Fragment>
                ))}
            </SkillsList>
        </GreetingTextContainer>
    );
};

export default GreetingText;