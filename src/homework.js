import './App.css';

function App() {

  const displayYear = () => {
    return new Date().getFullYear()

  }

  //homework2
  const Homework2 = () => {
    const protocol = 'https';
    const domain = 'tproger.ru';
    const path = 's3/uploads/2016/10/reactmini.png';
    const alt = 'React-mini'
    return (
      <div>
        <img src={`${protocol} + "://" + ${domain} + "/" + ${path}`} alt={alt} />
        <h1>React JS нельзя освоить без JavaScript</h1>
      </div>
    )
  }



  return (
    <div className='parent'>
      <div className='firstTask'>
        <title>Ведущие Frontend технологии в {displayYear()} году</title>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>Svelte</li>
      </div>


    </div>
  );
}

export default App;
