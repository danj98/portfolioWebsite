import React from 'react'
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div class="terminal">
        <div class="output">
          <span class="prompt">{'>'} </span><span class="command">cd Documents/</span><br></br>
          <span class="prompt">{'>'} </span><span class="command">ls -l</span><br></br>
          <span class="line">total 1</span><br></br>
          <span class="line">-rw-r--r--  1 user  group  120 May 11 14:15 <span class="out">resume.txt</span></span><br></br>
          <span class="prompt">{'>'} </span><span class="command">head -n 2 <span class="out">resume.txt</span></span><br></br>
          <span class="line">Dan Joar Heimvik</span><br></br>
          <span class="line">Software developer</span><br></br>
          <span class="prompt">{'>'} </span><span class="command">cat <span class="out">resume.txt</span> | grep <span class="string">"Education"</span></span><br></br>
          <span class="line">--== Education ==--</span><br></br>
          <span class="line">Master's degree in Software Development</span><br></br>
          <span class="line">University of Bergen / Western Norway University of Applied Sciences</span><br></br>
          <span class="line">2022 - 2024</span><br></br>
          <span class="line">...</span><br></br>
          <span class="line">Bachelor's degree in Cybersecurity</span><br></br>
          <span class="line">University of Bergen</span><br></br>
          <span class="line">2019 - 2022</span><br></br>
          <span class="prompt">{'>'} </span><span class="command">cat <span class="out">resume.txt</span> | grep <span class="string">"Work experience"</span></span><br></br>
          <span class="line">--== Work experience ==--</span><br></br>
          <span class="line">Process operator (summer intern/on-call employee) - Hydro Husnes</span><br></br>
          <span class="line">2017 - 2023</span><br></br>
          <span class="line">...</span><br></br>
          <span class="prompt">{'>'} </span><span class="command">cat <span class="out">resume.txt</span> | grep <span class="string">"Skills"</span></span><br></br>
          <span class="line">--== Skills ==--</span><br></br>
          <span class="line">-- Programming languages --</span><br></br>
          <span class="line">- Most experience:</span><br></br>
          <span class="line">Java, Python, C#</span><br></br>
          <span class="line">- Some experience:</span><br></br>
          <span class="line">C, C++, JavaScript, HTML, CSS, SQL</span><br></br>
          <span class="line">...</span><br></br>
          <span class="line">-- Frameworks --</span><br></br>
          <span class="line">Most experience:</span><br></br>
          <span class="line">.NET, Spring Boot, React</span><br></br>
          <span class="line">...</span><br></br>
          <span class="line">Some experience:</span><br></br>
          <span class="line">Flask, Django, AngularJS, React Native, Vue</span><br></br>
          <span class="line">...</span><br></br>
          <span class="line">Other</span><br></br>
          <span class="line">Git, Docker, Linux, Windows, Static and dynamic code analysis</span><br></br>
          <span class="prompt">{'>'} </span><span class="command">cat <span class="out">resume.txt</span> | grep <span class="string">"Interests"</span></span><br></br>
          <span class="line">--== Interests ==--</span><br></br>
          <span class="line">Programming, electronics, gaming, music production, hiking, skiing</span><br></br>
          <span class="prompt">{'>'} </span><span class="command">cat <span class="out">resume.txt</span> | grep <span class="string">"Languages"</span></span><br></br>
          <span class="line">--== Languages ==--</span><br></br>
          <span class="line">Norwegian - Native</span><br></br>
          <span class="line">English - Fluent</span><br></br>
          <span class="prompt">{'>'} </span><span class="command">exit</span><br></br>
        </div>
      </div>
    </div>

    

  )
}

export default Resume