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
              &nbsp;and serves as a playground for me to learn more about web development.
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
                I have done a few projects during my time at university. Some of them are group projects, but I have also done some solo projects.
                Here is a collection of some of the projects and course I have done along with a description. Not all of them are publicly available.
              </p> 
              <div className='lists'>
                <ul>
                  <li>
                    <p><u>DAT250 - poll app</u></p>
                    <p>
                      This is a group project for the course DAT250 - Advanced Software Technologies. The goal of the project was to create a web application
                      with a backend and a frontend. The backend was implemented using C# and ASP.NET Core and the frontend was implemented using React.
                    </p>
                  </li>
                  <li>
                    <p><u>DAT251 - rideshare app</u></p>
                    <p>
                      This is a group project for the course DAT251 - Modern Software Development Methods. In this course we created a phone application for
                      people to share rides with each other. The course itself was about agile software development where we used methodologies from
                      Scrum and XP to develop the application. The application was developed using React Native for the phone client and Spring Boot for the backend.
                    </p>
                  </li>
                  <li>
                    <p><u>INF142 - Computer Networks</u></p>
                    <p>
                      This is a group project for the course INF142 - Computer Networks. The goal of the project was to create a networked application
                      for a simulated weather station. This was mostly written in python.
                    </p>
                  </li>
                  <li>
                    <p><u>INF264 - Introduction to Machine Learning</u></p>
                    <p>
                      In this course we used SciKit Learn to implement a few machine learning algorithms. One of the project consisted of creating a digit
                      regocnizer using different ML models, and then evaluate them using cross-validation, testing accuracy and tuning hyperparameters.
                    </p>
                  </li>
                  <li>
                    <p><u>Other cool/fun/traumatic courses:</u></p>
                    <ul>
                      <li>INF273 - Metaheuristics </li>
                      <li>INF240A - Basic Tools for Coding theory and Cryptography</li>
                      <li>INF140 - Introduction to Cybersecurity</li>
                      <li>INF143A - Applied Cryptography</li>
                      <li>INF214 - Concurrent programming</li>
                      <li>INF226 - Software Security</li>
                      <li>INF234 - Algorithms</li>
                    </ul>
                  </li>
                </ul>
            </div>
        </div>
      </div>
      </Collapsible>
    </div>
  )
}


export default Projects