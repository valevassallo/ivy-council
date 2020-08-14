import React from 'react'

import projectsData from '../data/projectsData.json'

import Spinner from 'react-bootstrap/Spinner'

function Project({projectId}) {
  const [project, setProject] = React.useState()
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const projectInfo = projectsData.projects.filter(p => p.id === projectId)

    if (projectInfo) {
      setProject(projectInfo)
      setLoading(false)
    }
  }, [])

  console.log("PROJECT: ", project )

  return(
    <div className="container-fluid">
      {(!loading ?
        (
          <>
            <div className="project-img-container" style={{position: "relative", width: "100%"}}>
              <img src={project[0].imgLink} alt="project img" className="project-img" />
              <div className="bg-transparent-caption"></div>
              <div className="project-title-container">
                <div style={{width: "100%"}}>
                  <h1>{project[0].title}</h1>
                  <h3>{project[0].topic}</h3>
                </div>
              </div>
            </div>
            <div className="project-content-container">
              <div className="row mb-3">
                <div className="col-12 col-sm-7 col-md-8 col-lg-8 col-xl-8 left-side-info">
                  <h1>Description</h1>
                  <p>{project[0].description}</p>
                  <h1>Region</h1>
                  <p>{project[0].region}</p>
                </div>
                <div className="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4 xs-pading">
                  <div class="right-side-info clearfix">
                    <img class="project-org-img" src={project[0].orgLogo} alt="org-logo" />
                    <div style={{paddingTop: 80}}>
                      <h5 style={{textAlign: "center"}}>{project[0].orgName}</h5>
                      <h6> </h6>
                    </div>
                    <a href={project[0].orgLink} class="btn float-right project-org-button">CONTACT ORGANIZATION</a> 
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Spinner animation="border" />
        )
      )}
      
    </div>
  )
}

export default Project;