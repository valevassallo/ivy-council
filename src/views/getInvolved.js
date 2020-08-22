import React from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Navbar from '../components/Navbar'

function GetInvolved() {
  return (
    <>
      <Navbar />
      <div className="container-fluid padding">
        <div className="row">
          <h1 style={{margin: 0, paddingBottom: 0}} className="display-4 col-md-12">Contact Us</h1>
          <div className="col-md-6 col-md-offset-2">
            <p className="paragraph-no-margin">
              Contact the Ivy Council
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label-contact">Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label className="form-label-contact">Your Full Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicProjectName">
                <Form.Label className="form-label-contact">Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-md-6 col-md-offset-2">
            <p className="paragraph-no-margin">
              Fill this form if you want to support a project
            </p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="form-label-contact">Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label className="form-label-contact">Your Full Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicProjectName">
                <Form.Label className="form-label-contact">Project You Want to Support</Form.Label>
                <Form.Control as="select">
                  <option>--------------</option>
                  <option>Project 1</option>
                  <option>Project 2</option>
                  <option>Project 3</option>
                  <option>Project 4</option>
                  <option>Project 5</option>
                </Form.Control>
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInvolved;