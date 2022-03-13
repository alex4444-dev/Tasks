import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { Posts } from './Components/Posts/Posts'
import { LoginForm } from './Components/LoginForm/LoginForm'
import { Header } from './Components/Header/Header'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <Router>
      <div className="App">
        <Header userName={userName}
        />

        <main>
          <Routes>
            <Route exact path='/' render={() => {
              if (isLoggedIn) return <Navigate to='/posts' />;
              return <Navigate to='/loginForm' />;
            }} />

            <Route path='/login'
              render={() => <LoginForm />} />

            <Route path='/posts'
              render={() => <Posts />} />


          </Routes>
        </main>


        {
          isLoggedIn ? (
            <>
              <Posts />
            </>
          ) : (
            <LoginForm
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName} />
          )
        }
      </div >
    </Router>

  )
}

export default App;
