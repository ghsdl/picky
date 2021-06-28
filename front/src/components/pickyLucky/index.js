import React from 'react'
import Header from 'src/containers/Header';
import './index.scss'

const PickyLucky = ({
  pickyLucky
}) => {

  return(
    <>
      <Header/>
      <div className="pickyLucky">
        <div className="profileLuckyPicky">
          <h2 className="profileLuckyPicky-title"> Lucky Picky </h2>
        </div>
        <div className="getLucky">
          <button className="getLucky-button" onClick={pickyLucky}> 
            get Lucky
          </button>
        </div>
      </div>
    </>
  )
}

export default PickyLucky;