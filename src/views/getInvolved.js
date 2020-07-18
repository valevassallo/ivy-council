import React from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function GetInvolved() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-md-offset-2">
            <h1 className="display-4">Help Us! Donate!</h1>
            <p class="paddingBottom45">
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

          <Form.Group controlId="formBasicOrganizationName">
            <Form.Label>Name of Your Organization</Form.Label>
            <Form.Control
              type="organizationname"
              placeholder="Organization Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicProjectName">
            <Form.Label>Project You Want to Support</Form.Label>
            <Form.Control type="name" placeholder="Project Name" />
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