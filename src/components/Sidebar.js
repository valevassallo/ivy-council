import React from "react";

import Nav from 'react-bootstrap/Nav'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import RangeSlider from 'react-bootstrap-range-slider';

function Sidebar({filters, setFilters, budgetFilter, setBudgetFilter}) {
  const [budget, setBudget] = React.useState(0)
  const handleChange = e => {
    // e.preventDefault();

    if (e.target.checked) {
      let array1 = [...filters, e.target.value]
      let uniqueArray = array1.filter((v, i, a) => a.indexOf(v) === i);
      setFilters(uniqueArray)
    } else {
      const index = filters.indexOf(e.target.value);
      const newFilters = [...filters]
      if (index > -1) {
        newFilters.splice(index, 1);
      }
      setFilters(newFilters)
    }
  }

  const topics = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-Being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responisble Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life On Land",
    "Peace, Justice and Strong Institutions",
    "Partnerships for the Goals"
  ]

  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            <h3>Filter by...</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Accordion>
            <Card className="bg-dark text-white">
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                Topics
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form onChange={handleChange}>
                    {topics.map((topic, idx) => (
                      <div key={`${idx}-${topic}`} className="mb-3">
                        <Form.Check 
                          type="checkbox"
                          id="default-checkbox"
                          label={topic}
                          value={topic}
                        />
                      </div>
                    ))}
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="bg-dark text-white">
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                Regions
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <Form onChange={handleChange}>
                    {['North America', 'South America', 'Europe', 'Asia'].map((region) => (
                      <div key={`default-${region}`} className="mb-3">
                        <Form.Check 
                          type="checkbox"
                          id={region}
                          label={region}
                          value={region}
                        />
                      </div>
                    ))}
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className="bg-dark text-white">
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
                Budget
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <span>Budget: ${budgetFilter}</span>
                  <RangeSlider
                    style={{zIndex: 1000}}
                    value={budgetFilter}
                    onChange={changeEvent => setBudgetFilter(changeEvent.target.value)}
                    min={0}
                    max={10000}
                    tooltip="auto"
                    tooltipPlacement="top"
                    size="sm"
                    tooltipLabel={value => `$ ${value}`}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar