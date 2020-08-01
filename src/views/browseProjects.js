import React from 'react'

import { Link } from "@reach/router";

import projectsData from '../data/projectsData.json'

import Sidebar from '../components/Sidebar'
import ProjectCard from '../components/ProjectCard'

import CardDeck from 'react-bootstrap/CardDeck'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

function BrowseProjects() {
  const [filters, setFilters] = React.useState([])
  const [searchValue, setSearchValue] = React.useState()

  const showProjects = () => {
    if (!!projectsData.projects) {
      if (searchValue) {
        const filteredProjects = projectsData.projects.filter(project => {
          return project["title"].toLowerCase().includes(searchValue)
        })

        const results = filteredProjects.length

        return(
          <>
            <div className="row">
              <h6 className="col text-left">{results} results found</h6>
            </div>
            <CardDeck style={{justifyContent: "center"}}>
              {filteredProjects.map((project, idx) => {
                return(
                  <Link to={`/projects/${project.id}`}>
                    <ProjectCard project={project} key={`${project.title}-${idx}`} />
                  </Link>
                )
              })}
            </CardDeck>
          </>
        )
      } else if (!!filters.length) {
        const filteredProjects = projectsData.projects.filter(project => {
          return (filters.includes(project.topic) || filters.includes(project.region))
        })

        const results = filteredProjects.length

        return(
          <>
            <div className="row">
              <h6 className="col text-left">{results} results found</h6>
            </div>
            <CardDeck style={{justifyContent: "center"}}>
              {filteredProjects.map((project, idx) => {
                return(
                  <Link to={`/projects/${project.id}`}>
                    <ProjectCard project={project} key={`${project.title}-${idx}`} />
                  </Link>
                )
              })}
            </CardDeck>
          </>
        )
      } else {
        return(
          <>
            <div className="row">
              <h6 className="col text-left">{projectsData.projects.length} results found</h6>
            </div>
            <CardDeck style={{justifyContent: "center"}}>
              {projectsData.projects.map((project, idx) => {
                return(
                  <Link to={`/projects/${project.id}`}>
                    <ProjectCard project={project} key={`${project.title}-${idx}`} />
                  </Link>
                )
              })}
            </CardDeck>
          </>
        )
      }
    }
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  console.log("search value", searchValue)

  return (
    <div className="container-fluid">
      <div className="row">
        <Col xs={3} id="sidebar-wrapper">      
          <Sidebar filters={filters} setFilters={setFilters} />
        </Col>
        <Col  xs={9} id="page-content-wrapper">
          <div className="row">
            <div className="col-md-9 col-md-offset-2">
              <h1 className="display-4">Our Projects</h1>
            </div>
          </div>

          <div className="row">
            <h5 className="col text-left">Browse Projects</h5>
          </div>

          <div className="row">
            <div className="col text-center">
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearch}
                    className="mr-sm-2" />
                  <Button variant="success">Search</Button>
                </Form>
            </div>
          </div>

          <div style={{marginTop: 16}}>
            {showProjects()}
          </div>
        </Col>
      </div>
    </div>
    );
}

export default BrowseProjects;

