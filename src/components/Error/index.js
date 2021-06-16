import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import Header from 'src/containers/Header';

import './error.scss';

function Error() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./emptypopcorn.json'),
    });
  }, []);
  return (
    <>
      <Header />
      <div className="error">
        <h2 className="error-title"> Il n'y a aucun film à voir par ici...</h2>
        <div className="error-container" ref={container} />
      </div>
    </>
  );
}

export default Error;
