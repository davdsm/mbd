import React from 'react';
import MBD from "../assets/svg/logo.svg";

const Header: React.FunctionComponent = () => {

  const onClickLogo = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className='header'>
    <div className='container'>
      <button onClick={onClickLogo}>
        <MBD />
      </button>
    </div>
    </header>
  )
}

export default Header

