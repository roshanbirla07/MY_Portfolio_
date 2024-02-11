import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roshan Birla </span>
            from <span className="purple"> Madhya Pradesh, India.</span>
            <br /> I am a Third Year student pursuing BTech.
            in electronics and Communication from National Institute of Technology Patna.
            <br />
            Additionally, I am enthusiastic about Problem solving.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Vlogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
