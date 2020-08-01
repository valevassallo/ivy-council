import React from 'react'

import Card from 'react-bootstrap/Card'
import CardBG from '../img/card-bg.svg'

function ProjectCard({project}) {
  return(
    <div className="individual-card">
      <Card className="bg-dark text-white">
        <Card.Img src={CardBG} alt="card bg"/>
        <Card.ImgOverlay>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            {project.description}
          </Card.Text>
          <Card.Text>{project.topic} | {project.region}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default ProjectCard;