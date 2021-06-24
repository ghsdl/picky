import React from 'react';
import Header from 'src/containers/Header';
import { useState } from 'react';
// import PropTypes from 'prop-types';

import './about.scss';
import logo from './logo_PopCorn.png';

function About () {
  const data = [
    {
      title: 'About Us - Crew',
      infos: " ",
      about: [
        { 
          name: "Maeva", 
          role: "Product Owner",
        },
        { 
          name: "Sofiane",
          role: "Lead Dev Back",
        },
        { 
          name: "Nina", 
          role: "Lead Dev Front",
        },
        { 
          name: "Clement", 
          role: "Référent Technique",
        },
        { 
          name: "Delia", 
          role: "Scrum Master",
        },
      ],
    },
  
    {
      title: 'Nous contacter',
      infos: 'blablabla',
      about: [
        {
          name : false,
          role: false,
        }
      ]
    },
  
    {
      title: 'A propos de Picky',
      infos: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      about: [
        {
          name: false,
          role: false,
        }
      ]
    }
  ]
  
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }


  return (
    <>
      <Header /> 
      <div className="about">
        <div className="accordion">
          {data.map((informations, i) => (
          <div key={informations.title} className="container">
            <div className="container-title" onClick={() => toggle(i)}> 
              <h2> {informations.title}</h2>
              <span> {selected === i ? '-' : '+'} </span>
            </div>
            <div className={selected === i ? 'content-show' : 'content'}>
              <p> {informations.infos}</p>
              {informations.about.map((child) => {
                return (
                <>
                  <div className="row">
                    <img className="row-img" src={logo} alt="logo" />
                    <h4 className="row-name"> {child.name} </h4>
                    <h5 className="row-role"> {child.role} </h5>
                  </div>
              </>
              )})}
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )

}

export default About;
