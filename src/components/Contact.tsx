import React from 'react';

const Contact: React.FunctionComponent = () => {

  return (
    <div className='contacts-row'>
      <div className='contacts-row-title'>
        <hr />
        <span>Contacto</span>
      </div>
      <div className='contacts-row-content'>
        <span>Projetos e colaborações:</span>
        <a href='mailto:geral@jacreativedesign.pt'>
          geral@jacreativedesign.pt
        </a>
      </div>
    </div>
  )
}

export default Contact

