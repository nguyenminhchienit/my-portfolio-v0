import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">nguyenminhchienit - takisdev </span>
            from <span className="purple"> Ho Chi Minh City, Vietnam.</span>
            <br />
            I am currently employed intern as a front end developer at NET
            GROUP.
            <br />
            Currently I am a 4th year student at Ho Chi Minh City University of
            Technology (HUTECH).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">
            nguyenminhchienit - takisdev
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
