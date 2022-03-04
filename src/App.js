import React from 'react';
import './App.css';
import { TopBar } from './Components/Topbar/TopBar'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { MainBlock } from './Components/MainBlock/MainBlock'
import { Footer } from './Components/Footer/Footer'



function App() {

  return (
    <div className="App">
      <div>
        <div className="content">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="aside">
            <TopBar />
            <hr />
            <MainBlock />
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
