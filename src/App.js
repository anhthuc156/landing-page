import React from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import Navbar from './components/NavBar/Navbar';
import model3 from './images/model-3-hero-desktop-v2-1.jpg';
import IntroSectionBlock from './components/IntroSectionBlock/IntroSectionBlock';

function App() {
  
  return (
    <>
      <Navbar />
      <IntroSectionBlock />
      <section id="model-3">
        <section className="hero hero-with-callouts hero-with-disclaimer">
            <picture>
                <img src={model3} alt="model3" className="hero-asset" />
            </picture>
            <div className="hero-regions-wrapper">
                <div className="hero-regions">
                    <div className="hero-region-center hero-region-with-callouts">
                        <div className="hero-region-center-top header-copy-position-default">
                            <header>
                                <h1 className="header-white tds-animate-small-reveal">
                                    <span className="header-upper s1 tds-animate-small-to-reveal"></span>
                                    <span className="header-lower tds-animate-small-to-reveal">Model 3</span>
                                </h1>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </section>
      <BackgroundVideo />
    </>
  );
}

export default App;
