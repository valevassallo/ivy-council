import React from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NominateProject() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <h1 className="display-4">
              Do you know an organization with an incredible project? Nominate
              it here!
            </h1>
          </div>
        </div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="formBasicOrganizationName">
            <Form.Label>Name of Your Organization</Form.Label>
            <Form.Control
              type="organizationname"
              placeholder="Organization Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicProjectName">
            <Form.Label>Name of Your Project</Form.Label>
            <Form.Control type="name" placeholder="Project Name" />
          </Form.Group>

          <Form.Group controlId="formBasicProjectDescription">
            <Form.Label>What is the project about?</Form.Label>
            <Form.Control as="textarea" rows="6" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default NominateProject;