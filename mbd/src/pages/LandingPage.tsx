import React from 'react';
import Slide from '../components/Slide';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Method from '../components/Method';
import Contact from '../components/Contact';
import IntroLine from '../components/IntroLine';
import Context from '../components/Context';

import '../styles/LandingPage.scss';

const LandingPage: React.FunctionComponent = () => {

  return (
    <React.Fragment>
      <Header />
      <IntroLine />
      <Slide />
      <Context />
      <div className='container content'>
        <Services />
        <Method />
        <Contact />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default LandingPage

