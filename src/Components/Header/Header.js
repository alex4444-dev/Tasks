import "./Header.css";

export const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
  }



  return (
    <header className='mainHeader'>
      {
        isLoggedIn ?
          <nav>
            {userName},&nbsp;
            <button href='/login'>Выход</button>
          </nav>
          : 'Добро пожаловать, гость'
      }

    </header >
  );
};