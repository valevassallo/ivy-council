import React from 'react'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function BrowseProjects() {
  return (
    <>
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
              <Button variant="outline-info">Search</Button>
            </Form>
        </div>
        <div className="col text-left">
            <div className="mb-2">
              <Button variant="primary" size="lg">
                Topic
              </Button>{' '}
              <Button variant="secondary" size="lg">
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

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              This is a project description.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Project 4</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Project 5</Card.Title>
            <Card.Text>
              This is a project description.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Project 6</Card.Title>
            <Card.Text>
              This is a project description.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
    </>
    );
}

export default BrowseProjects;

