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
            I am currently working on my masters thesis. The project is about using&nbsp;
            <a href='https://en.wikipedia.org/wiki/Model-driven_engineering'>model-driven software engineering</a>
            &nbsp;in order to abstract and simplify robot mission planning. The goal is to make it easier for non-programmers 
            and domain-experts to create robot missions.
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
        <div className='project'>
          <div className='text'>
            <p>
              This is the website you are currently viewing. It is built using <a href='https://reactjs.org/' target="_blank" rel="noreferrer">React</a>
              &nbsp;and serves as a way for me to learn more about web development.
            </p>
            <p>
              The code for this project can be found <a href='https://github.com/danj98/portfolioWebsite' target="_blank" rel="noreferrer">here</a>.
            </p>
          </div>
        </div>
      </Collapsible>

      <hr />

      <Collapsible trigger="School projects" triggerTagName="div">
        <div className='project'>
            <div className='text'>
              <p>
                I have done a few projects during my time at university. Most of them are group projects, but I have also done a few solo projects.
                Here is a collection of some of the projects I have done along with a description. Not all of them are publicly available.
              </p> 
                <ul>
                  <li>  </li>
                  <li>  </li>
                </ul>
            </div>
        </div>        
      </Collapsible>

    </div>
  )
}


export default Projects