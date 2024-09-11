import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import GreetingImageDiv from '../GreetingImageDiv';
import GreetingText from '../GreetingText';
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text, marginBottom: '10px' }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text, marginBottom: '70px' }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <GreetingText theme={theme} />
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div" style={{ marginTop: '20px' }}>
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">

            <GreetingImageDiv />
          </div>
        </div>
      </div>
    </Fade>
  );
}
