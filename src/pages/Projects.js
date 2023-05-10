import React from 'react'
import Collapsible from 'react-collapsible'
import "../styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
    
      <h1>Projects</h1>

      <Collapsible trigger="Masters Project" triggerTagName="div">
        <p>
          My masters project was about...
        </p>
      </Collapsible>

      <hr />

      <Collapsible trigger="Arduino facial recognition" triggerTagName="div">
        <div className='project'>
          <img src="https://github.com/danj98/ArduinoFaceTracker/raw/master/resources/prototype.jpg" alt="Arduino facial recognition" />
          <p>
            This project was about...
          </p>
        </div>
      </Collapsible>

      <hr />

      <Collapsible trigger="Portfolio website" triggerTagName="div">
        <p>
          This project was about...
        </p>
      </Collapsible>

      <hr />

      <Collapsible trigger="School projects" triggerTagName="div">
        <p>
          This project was about...
        </p>
      </Collapsible>

    </div>
  )
}


export default Projects