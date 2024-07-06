import React, { useState } from 'react';

const Context: React.FunctionComponent = () => {

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1410);

  const onResize = () => {
    setIsMobile(window.innerWidth <= 1410);
  };

  window.onresize = onResize;

  return (
    <div className='container context'>
        <div className='large-text'>
          {
            isMobile ? 
            <React.Fragment>
              Este é um projeto
              <br/>
              iniciado em 2023 o
              <br/>
              MBD_001 é o
              <br/>
              <span className='text-italic'>&ldquo;nextstep&rdquo;</span> do
              <br/>
              estúdio de design
              <br/>
              gráfico para uma
              <br/>
              consultora
              <br/>
              especializada nos 3
              <br/>
              pilares do negócio
              <br/>
              (estratégia,
              <br/>
              branding e design)
            </React.Fragment>
            :
            <React.Fragment>
              Este é um projeto iniciado em 2023 o MBD_001
              <br/>
              é o <span className='text-italic'>&ldquo;nextstep&rdquo;</span> do estúdio de design gráfico para
              <br/>
              uma consultora especializada nos 3 pilares do
              <br/>
              negócio (estratégia, branding e design)
            </React.Fragment>
          }
        </div>
        <div className='large-text'>
          {
            isMobile ? 
            <React.Fragment>
              Desta forma
              <br />
              permitirá trabalhar
              <br/>
              com pequenas e
              <br/>
              grandes empresas
              <br/>
              de diversos
              <br/>
              setores.
            </React.Fragment>
            :
            <React.Fragment>
              Desta forma permitirá trabalhar com pequenas
              <br/>
              e grandes empresas de diversos setores.
            </React.Fragment>
          }
        </div>
    </div>
  )
}

export default Context

