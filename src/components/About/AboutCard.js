import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kapil Patidar </span>
            from <span className="purple"> Bhopal , Madhya Pradesh.</span>
            <br />
            I am currently working as a Full Stack Developer.
            <br />
            I am very much interested in developing new things which excite me a lot.
            I have recently Completed my Pg-DAC diploma in Advanced Computing  at Sunbeam (Karad).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore New Places of Food Items.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kapil Patidar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
