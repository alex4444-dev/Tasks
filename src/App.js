import './App.css';

function App() {
  return (
    <div className='parent'>
      <div>
        <h1>Добро пожаловать на мой сайт!</h1>
      </div>
      <div>
        <p className='about'>
          Что-то обо мне
          <br></br>
          <b> И <i>про мои </i>достижения!</b>
        </p>
        <div className='header'>
          <h2>Шапка</h2>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className='content'>
          <h1>Контент</h1>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className='footer'>
          <h2>Подвал</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
