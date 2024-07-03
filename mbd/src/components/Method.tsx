import React, { useEffect, useState } from 'react';

import HorizontalMethodSchema from "../../src/assets/svg/horizontal-method-schema.svg";
import VerticalMethodSchema from "../../src/assets/svg/vertical-method-schema.svg";

const Method: React.FunctionComponent = () => {

  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  const checkMethodSchemaOrientation = () => {
    if ( window.innerWidth <= 1100 ) {
      setIsDesktop(false);
    }
    else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    checkMethodSchemaOrientation();
  }, []);

  window.onresize = checkMethodSchemaOrientation;


  return (
    <div className='method-row'>
      <div className='method-row-title'>
        <span>&#8211;&#8211;</span>
        <span>Método</span>
      </div>
      <div className='method-row-content'>
        <span>01. Descoberta:</span>
        <span style={{ textWrap: "balance" }}>Workshop de estratégia & Imersão no teu mundo.</span>
        <br />
        <span>02. Direção:</span>
        <span>Posicionamento & Identidade visual e verbal.</span>
        <br />
        <span>03. Fluxo:</span>
        <span>Um sistema de marca pronto a desenvolver como deseja, com os fornecedores à sua escolha.</span>
        <div className='schema'>
          { isDesktop ? <HorizontalMethodSchema /> : <VerticalMethodSchema /> }
        </div>
      </div>
    </div>
  )
}

export default Method

