import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import './loading.scss';

function Loading () {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./movieloading.json')
    })
  }, [])
  return (
    <div className="loading">
      <h2 className="loading-title"> Veuillez patienter...</h2>
      <div className="loading-container" ref={container}></div>
    </div>
  );
}


export default Loading;
