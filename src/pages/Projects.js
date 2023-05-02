import React from 'react'
import Collapsible from 'react-collapsible'
import "../styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
    
      <h1>Projects</h1>

      <Collapsible trigger="Masters Project">
        <p>
          My masters project was about...
        </p>
      </Collapsible>

      <hr />

      <Collapsible trigger="Arduino facial recognition">
        <p>
          This project was about...
        </p>
      </Collapsible>

      <hr />

      <Collapsible trigger="Portfolio website">
        <p>
          This project was about...
        </p>
      </Collapsible>

      <hr />

      <Collapsible trigger="School projects">
        <p>
          This project was about...
        </p>
      </Collapsible>

    </div>
  )
}


export default Projects