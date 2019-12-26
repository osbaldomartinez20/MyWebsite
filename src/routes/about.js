import React from 'react'
import logo from '../public/images/download.png';
import {Link} from 'react-router-dom';
import '../public/stylesheets/App.css';

function About() {
    const name = "Osbaldo Martinez Iniguez";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <p>
            Hello, my name is {name}. I am a student at SFSU; I am majoring on Computer Science plus
            minoring on Mathematics. I am a fast leraner and I like to challange myself by constantly
            learning new things.
          </p>
          <br></br>
          <a
            className="App-link"
            href="https://github.com/osbaldomartinez20"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
          <p>
            If you are interted in my academics checkout my unofficial transcript by clicking below.
          </p>

          <Link to="/transcript" className="boton">Transcript</Link>

        </header>
      </div>
    );
  }

  export default About;