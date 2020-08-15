import React from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GetInvolved() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-md-offset-2">
            <h1 className="display-4">Contact Us</h1>
            <p className="paragraph-no-margin">
              We’ll email you the details, so you can support the project you choose
            </p>
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

          {/* <Form.Group controlId="formBasicOrganizationName">
            <Form.Label>Name of Your Organization</Form.Label>
            <Form.Control
              type="organizationname"
              placeholder="Organization Name"
            />
          </Form.Group> */}

          <Form.Group controlId="formBasicOrganizationName">
            <Form.Label>Organization You Want to Support</Form.Label>
            <Form.Control as="select">
              <option>--------------</option>
              <option>Organization 1</option>
              <option>Organization 2</option>
              <option>Organization 3</option>
              <option>Organization 4</option>
              <option>Organization 5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default GetInvolved;