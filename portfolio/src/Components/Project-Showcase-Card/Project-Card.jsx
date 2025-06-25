import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProjectCard({ proj }) {
  // console.log("PRops: ", props)
   const linkToShow = proj.githubUrl || proj.figmaUrl;
  const linkLabel = proj.githubUrl ? "GitHub URL" : "Figma URL";
  return (
    <>
      <Container>
        <Row>
          <Card className="cards">
            <Card.Img variant="top" src={proj.image} alt={proj.name} />
            <Card.Body>
              <Card.Title>{proj.title}</Card.Title>
              <Card.Text>{proj.description}</Card.Text>
              {/* <Card.Text><Stack direction="horizontal" gap={2}>
      <Badge bg="warning">JavaScript</Badge></Stack></Card.Text> */}
              {/* <Link to={proj.githubUrl}>Github URL</Link> */}
               {linkToShow && (
              <Link to={linkToShow}>{linkLabel}</Link>
            )}

              <Card.Text></Card.Text>
              <Link to={proj.deployedUrl}>Deployed URL</Link>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default ProjectCard;
