import React, { useEffect }  from 'react'
import Header from 'src/containers/Header';
import './index.scss'
import PropTypes from 'prop-types';
import Details from 'src/components/details'
import { Link } from 'react-router-dom';

const PickyLucky = ({
   getLucky,
   lucky,
   loading,
   movie,
   resetPickyLucky,
   isConnected
}) => {
  const pickyLucky = () => {
    getLucky();
  }
  useEffect(() => {
    return () => {
      resetPickyLucky();
    }
  }, []);

  return(
    <>
      <Header/>
      {!lucky &&(
        <div className="pickyLucky">
          <div className="profileLuckyPicky">
            <h2 className="profileLuckyPicky-title"> Picky Lucky </h2>
          </div>
          <div className="getLucky">
            <button className="getLucky-button" onClick={pickyLucky}> 
              get Lucky
            </button>
          </div>
          <div className="pickyLucky__gradient">
            <div className="pickyLucky__footer">
              {isConnected && (
                <Link className="pickyLucky__footer__link" to="/mood">MOOD</Link>
              )}
              {!isConnected && (
                <Link className="pickyLucky__footer__link" to="/signUp">MOOD</Link>
              )}
              <p className="pickyLucky__footer__text">Continuez à explorer</p>
              <Link className="pickyLucky__footer__link" to="/">FIND</Link>
            </div>
          </div>
        </div>
      )}
      {lucky &&(
        <div>
          <div className="pickyLucky">
            <div className="profileLuckyPicky">
              <h2 className="profileLuckyPicky-title"> Picky lucky </h2>
            </div>
            <Details movie={movie} loading={loading}/>
            <div className="pickyLucky__gradient">
              <div className="pickyLucky__footer">
                {isConnected && (
                  <Link className="pickyLucky__footer__link" to="/mood">MOOD</Link>
                )}
                {!isConnected && (
                  <Link className="pickyLucky__footer__link" to="/signUp">MOOD</Link>
                )}
                <p className="pickyLucky__footer__text">Continuez à explorer</p>
                <Link className="pickyLucky__footer__link" to="#" onClick={pickyLucky}>LUCKY</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

PickyLucky.propTypes = {
  getLucky: PropTypes.func.isRequired,
  lucky: PropTypes.bool,
  loading: PropTypes.bool,
  resetPickyLucky: PropTypes.func.isRequired,
};

export default PickyLucky;
