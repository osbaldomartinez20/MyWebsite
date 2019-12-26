import React from 'react';
import {Link} from 'react-router-dom';
import '../public/stylesheets/App.css';

const App = function() {
  const name = "Osbaldo Martinez Iniguez";
  return (
    <div className="App">
        <h1>
          My name is {name}, <br></br>I am a Software Engineer
          <br></br> <br></br> <p>if you want to learn more about me click on <a href="/about">about</a></p>
        <p>
          Or please feel free to take a look at my résumé
        </p>

        <Link to="/resume" className="boton">Résumé</Link>
        </h1>

    </div>
  );
}

export default App;
