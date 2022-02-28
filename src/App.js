import React from 'react';
import './App.css';

function App() {

  const first = 'React';
  const second = 'Vue';
  const third = 'Angular';
  const fourth = 'Svelte';


  const displayYear = () => {
    return new Date().getFullYear()
  }

  

  const protocol = 'https';
  const domain = 'tproger.ru';
  const path = 's3/uploads/2016/10/reactmini.png';
  const alt = 'React-mini'

  const avatar = 'https://edu.gntp.by/images/ava.png'

  const person = {
    name: 'Julia',
    job: 'Postman'
  }


  return (
    <div className="App">
      <div className='firstTask'>
        <h1>Ведущие Frontend технологии в {displayYear()} году</h1>
        <ul>
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
          <li>{fourth}</li>
        </ul>
      </div>


      <div>
        <img src={`${protocol}://${domain}/${path}`} alt={alt} />
        <h1>React JS нельзя освоить без JavaScript</h1>
      </div>

      <div>
        <h1>Work experience</h1>
        <ul>
          <li><strong>Name:</strong>{person.name}</li>
          <li><strong>Job:</strong>{person.job}</li>
          <li><strong>avatar:</strong></li>
        </ul>
        <img src={avatar}></img>
      </div>

    </div>
  );
}

export default App;
