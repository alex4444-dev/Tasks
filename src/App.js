import React from 'react';
import './App.css';




const TopBar = () => {
  const links = {
    link1: {
      path: 'https://google.com'
    },
    link2: {
      path: 'https://vk.com'
    },
    link3: {
      path: 'https://github.com'
    },
  }


  return (
    <div className="topbar">
      <header>
        <nav>
          <a href={links.link1.path}>Google</a>
          <a href={links.link2.path}>Vk</a>
          <a href={links.link3.path}>Github</a>
        </nav>
      </header>
    </div>
  );
}

const MainBlock = () => {
  const Title = 'Main content'


  let articles = {
    article1: {
      title1: "Article 1",
      description: "Lorem ipsum..."
    },
    article2: {
      title2: "Article 2",
      description: "Lorem ipsum..."
    },
    article3: {
      title3: "Article 3",
      description: "Lorem ipsum..."
    }
  }

  let Size = Object.keys(articles).length

  return (
    <div>
      <h1>{Title}</h1>
      <div className="articles">
        <div className="article">
          <h3>{articles.article1.title1}</h3>
          <p>{articles.article1.description}</p>
        </div>
        <div className="article">
          <h3>{articles.article2.title2}</h3>
          <p>{articles.article2.description}</p>
        </div>
        <div className="article">
          <h3>{articles.article3.title3}</h3>
          <p>{articles.article3.description}</p>
        </div>
      </div>

      <div>
        <div id="amount"><strong>Amount:</strong>{Size}</div>
      </div>
    </div>
  )
}

const Sidebar = () => {
  const title = 'Sidebar'
  return (
    <div>
      <aside>
        <h2>{title}</h2>
      </aside>
    </div>
  )
}

const Footer = () => {

  const logYear = () => new Date().getFullYear()

  return (
    <div className='footer'>
      <footer>
        Footer - {logYear()}
      </footer>
    </div>
  )
}

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
