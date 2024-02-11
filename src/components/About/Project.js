import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import project1Image from "../../Assets/news.jpg"; // Adjust the path based on your project structure
import project2Image from "../../Assets/clip_cinema.jpg"; // Adjust the path based on your project structure
import project3Image from "../../Assets/study_web.jpg"; 
const projects = [
  {
    title: "News_Website",
    description: "It Provides Real Time News Across the World",
    stack: ["Html", "Css", "Javascript"],
    image: project1Image,
    githubLink: "https://github.com/roshanbirla07/News-website",
    demoLink: "https://github.com/roshanbirla07",
  },
  {
    title: "Clip-cinema",
    description: "It basically provides clips of movies..",
    stack: ["React","Talwind", "JavaScript"],
    image: project2Image,
    githubLink: "https://github.com/roshanbirla07/Clip_Cinema",
    demoLink: "https://github.com/roshanbirla07/Clip_Cinema",
  },
  {
    title: "Study_web",
    description: "Its in Progress",
    stack: ["React","Talwind","Node.js", "JavaScript"],
    image: project3Image,
    githubLink: "https://github.com/roshanbirla07",
    demoLink: "https://github.com/roshanbirla07",
  }
];

function ProjectsSection() {
  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} alt={project.title}  width={100} height={200}/>
              <Card.Body>
                <Card.Title style={{color:"gray"}}>{project.title}</Card.Title>
                <Card.Text style={{color:"gray"}}>{project.description}</Card.Text>
                <Card.Text style={{color:"gray"}}>
                  <strong style={{color:"gray"}}>Stack:</strong> {project.stack.join(", ")}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  
                  <button style={{
                    background:"white",
                    border:"none",
                   
                  }}><a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"gray"}}>
                    GitHub
                  </a></button>
                  
                  <button style={{
                    background:"white",
                    border:"none",
                   
                  }}>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"gray"}}>
                    Demo
                  </a>
                  </button>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProjectsSection;
