import React, { useState } from 'react';

const IntroLine: React.FunctionComponent = () => {

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1410);

  const onResize = () => {
    setIsMobile(() => window.innerWidth <= 1410);
  };

  window.onresize = onResize;

  return (
    <div className='container intro-line'>
        <div className='large-text'>
            { 
              isMobile ? 
              <React.Fragment>
                MBD_001 <span className='text-italic'>&ldquo;piloto&rdquo;</span>
                <br/>
                é o Método entre
                <br/>
                Estratégia &
                <br/>
                Business Design.
              </React.Fragment>
              :
              <React.Fragment>
                MBD_001 <span className='text-italic'>&ldquo;piloto&rdquo;</span> é o Método entre
                <br/>
                Estratégia & Business Design.
              </React.Fragment>
            }
        </div>
    </div>
  )
}

export default IntroLine

