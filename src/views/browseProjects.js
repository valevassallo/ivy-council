import React from 'react'

import ProjectModal from '../components/Modal'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import CardBG from '../img/card-bg.svg'

function BrowseProjects() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container-fluid padding">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <h1 className="display-4">Our Projects</h1>
          </div>
        </div>

      <div className="row">
        <h5 className="col text-left">Browse Projects</h5>
        <h5 className="col text-left">Filter by...</h5>
      </div>

      <div className="row">
        <div className="col text-center">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="success">Search</Button>
            </Form>
        </div>
        <div className="col text-left">
            <div className="mb-2">
              <Button className="filter-btn" variant="success">
                Topic
              </Button>
              <Button className="filter-btn" variant="success">
                Region
              </Button>
            </div>
        </div>
      </div>

      <div className="row">
        <h6 className="col text-left"></h6>
        <h5 className="col text-center"></h5>
      </div>
      <div className="row">
        <h6 className="col text-left"></h6>
        <h5 className="col text-center"></h5>
      </div>

      <div className="row">
        <h6 className="col text-left">NUMBER results found</h6>
        <h5 className="col text-center"></h5>
      </div>

      <CardDeck className="card-deck">
        <Card onClick={() => setModalShow(true)}className="individual-card bg-dark text-white">
          <Card.Img src={CardBG} alt="card bg"/>
          <Card.ImgOverlay>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
            <Card.Text>Topic | Filter</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card onClick={() => setModalShow(true)}className="individual-card bg-dark text-white">
          <Card.Img src={CardBG} alt="card bg"/>
          <Card.ImgOverlay>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
            <Card.Text>Topic | Filter</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card onClick={() => setModalShow(true)}className="individual-card bg-dark text-white">
          <Card.Img src={CardBG} alt="card bg"/>
          <Card.ImgOverlay>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
            <Card.Text>Topic | Filter</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </CardDeck>
      <CardDeck className="card-deck">
        <Card onClick={() => setModalShow(true)}className="individual-card bg-dark text-white">
          <Card.Img src={CardBG} alt="card bg"/>
          <Card.ImgOverlay>
            <Card.Title>Project 4</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
            <Card.Text>Topic | Filter</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card onClick={() => setModalShow(true)}className="individual-card bg-dark text-white">
          <Card.Img src={CardBG} alt="card bg"/>
          <Card.ImgOverlay>
            <Card.Title>Project 5</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
            <Card.Text>Topic | Filter</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card onClick={() => setModalShow(true)}className="individual-card bg-dark text-white">
          <Card.Img src={CardBG} alt="card bg"/>
          <Card.ImgOverlay>
            <Card.Title>Project 6</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
            <Card.Text>Topic | Filter</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </CardDeck>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    );
}

export default BrowseProjects;

