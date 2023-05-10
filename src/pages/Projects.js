import React from 'react'
import Collapsible from 'react-collapsible'
import "../styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
    
      <h1>Projects</h1>

      <Collapsible trigger="Masters Project" triggerTagName="div">
        <div className='project'>
          <p>
            I am currently working on my masters project. 
          </p>
        </div>
      </Collapsible>

      <hr />

      <Collapsible trigger="Arduino face-tracking" triggerTagName="div">
        <div className='project'>
          <img src="https://github.com/danj98/ArduinoFaceTracker/raw/master/resources/prototype.jpg" alt="Arduino face-tracking" />
          <div className='text'>
            <p>
              This is a fun little project I did to see if I could make a targeting system for a laser pointer
              using an Arduino and a webcam. It consists of an arduino connected to a pc via USB, a webcam and a laser pointer.
              I use a python script running <a href='https://opencv.org/' target="_blank" rel="noreferrer">OpenCV</a> to track faces with the webcam.
              This is then fed to the arduino which then moves the laser pointer to the center of the face by controlling the servos.
              I wanted to use a OV7670 camera module, but the one I got was broken. The rig for the prototype is custom modeled and 3d printed by me.
            </p>
            <p>
              The code for this project can be found on <a href='https://github.com/danj98/ArduinoFaceTracker' target="_blank" rel="noreferrer">GitHub</a>.
            </p>
          </div>
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