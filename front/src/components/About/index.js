import React from 'react';
import Header from 'src/containers/Header';
import { useState } from 'react';
// import PropTypes from 'prop-types';

import './about.scss';

function About () {
  const data = [
    {
      title: 'About Us - Crew',
      infos: "Présentations:",
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
          name : " ",
          role: " ",
        }
      ]
    },
  
    {
      title: 'A propos de Picky',
      infos: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      about: [
        {
          name: " ",
          role: " ",
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
                  <div className="container">
                  <div className="front">
                    <div class="inner">
                      <p>Diligord</p>
                      <span>Lorem ipsum</span>
                    </div>
                  </div>
                  <div class="back">
                    <div class="inner">
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                    </div>
                  </div>
                </div>
              </div>
                  <div>
                  {child.name}
                  {child.role} 
                </div>
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
