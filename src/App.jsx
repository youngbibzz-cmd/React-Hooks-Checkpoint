import { useEffect } from 'react'
import MovieList from './components/MovieList.jsx'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'FRAME — Your film collection'
  }, [])

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="FRAME home">
          <span className="wordmark-mark" aria-hidden="true">F</span>
          <span>FRAME<span className="wordmark-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-link nav-link-active" href="#collection">Discover</a>
          <a className="nav-link" href="#collection">My collection</a>
        </nav>
        <a className="header-note" href="#collection">
          <span className="status-dot" />
          YOUR PERSONAL CINEMA
        </a>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="page-title">
          <div className="intro-copy">
            <p className="eyebrow"><span /> THE GOOD STUFF, ALL IN ONE PLACE</p>
            <h1 id="page-title">Stories worth<br /><span>staying in for.</span></h1>
            <p className="intro-description">A handpicked little corner for the films and shows you love.</p>
          </div>
          <div className="intro-art" role="img" aria-label="Cinematic view of a mountain landscape at dusk">
            <div className="intro-art-shade" />
            <div className="intro-art-caption">
              <span className="caption-kicker">TONIGHT'S MOOD</span>
              <span className="caption-title">Somewhere<br />beyond the ordinary.</span>
            </div>
            <span className="art-index">01 <i /> 04</span>
          </div>
        </section>
        <MovieList />
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">FRAME<span>.</span></a>
        <span>A good story stays with you.</span>
        <a href="#top" className="back-to-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App