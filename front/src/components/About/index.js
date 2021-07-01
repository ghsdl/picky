import React from 'react';
import Header from 'src/containers/Header';
import { useState } from 'react';
// import PropTypes from 'prop-types';

import './about.scss';

function About () {
  const data = [
    {
      title: 'About Us - Crew',
      id: 1,
      infos: " ",
      about: [
        { 
          name: "Maeva", 
          id: 1,
          role: "Product Owner",
          dev: "- Dev Back",
          img: "https://ca.slack-edge.com/T01H7FN28C9-U01HUH1UJG5-4bc3ba217e34-512",
        },
        { 
          name: "Sofiane",
          id: 2,
          role: "Lead Dev Back",
          dev: " ",
          img: "https://ca.slack-edge.com/T01H7FN28C9-U01JA8K5325-b32a5c98cfab-512",
        },
        { 
          name: "Nina", 
          id: 3,
          role: "Lead Dev Front",
          dev: " ",
          img: "https://ca.slack-edge.com/T01H7FN28C9-U01HV58S08M-5afdbfc92144-512",
        },
        { 
          name: "Clement", 
          id: 4,
          role: "Git Master - ",
          dev: "Dev Front",
          img: "https://ca.slack-edge.com/T01H7FN28C9-U01HUGJB529-b45c59226c15-512",
        },
        { 
          name: "Delia", 
          id: 5,
          dev: "- Dev Front",
          role: "Scrum Master",
          img: "https://ca.slack-edge.com/T01H7FN28C9-U01J4T1FGSX-5a82dcdf059e-192",
        },
      ]
    },
  
    {
      title: 'A propos de Picky',
      id: 2,
      infos: `Picky est née de la simple idée suivante : depuis maintenant quelques années, l’explosion du streaming est indéniable et de ce fait, ce nouveau phénomène occasionne inévitablement de nouvelles problématiques. Qui n’a jamais eu envie de regarder un blockbuster ou une série à succès sans pour autant savoir sur quelle plateforme il pourrait rassasier cette envie ? 

      Avec Picky, la question ne se pose plus, nous vous mettons à disposition un moteur de recherche intelligent spécialisé dans ce type de demande !
      
      La raison d’être de Picky est de trouver simplement et efficacement la plateforme qui diffuse vos programmes préférés en quelques clics afin de satisfaire le plus rapidement vos besoins d’informations pour un binge watching seul ou accompagné !
      
      Pourquoi “Picky”? Pour deux raisons: de l’anglais “choisir” TO PICK mais aussi de l’anglais “être pointilleux, exigeant" TO BE PICKY, ce qui correspond parfaitement à la démarche de trouver un programme à regarder qui correspond à nos envies ou trouver la plateforme correspondante au programme que l’on souhaite regarder.
      `,
      about: [],
    },

    {
      title: 'Technos utilisées',
      id: 4,
      infos: ` `,
      about: [
        { 
          name: "React JS", 
          id: 1,
          role: " ",
          dev: " ",
          img: "https://img2.freepng.fr/20180410/dbq/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243.4761515415233628528472.jpg",
        },
        { 
          name: "Redux", 
          id: 2,
          role: " ",
          dev: " ",
          img: "https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png",
        },
        { 
          name: "Node.js", 
          id: 3,
          role: " ",
          dev: " ",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
        },
        { 
          name: "Express Js", 
          id: 4,
          role: " ",
          dev: " ",
          img: "https://img2.freepng.fr/20180711/yfe/kisspng-express-js-node-js-javascript-mongodb-node-js-5b461d28173fc6.1251392115313216400952.jpg",
        },
        { 
          name: "PostgreSQL", 
          id: 5,
          role: " ",
          dev: " ",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png",
        },
      ],
    },

    {
      title: 'Mentions Légales',
      id: 3,
      infos: `Ce produit utilise l'API BetaSeries mais n'est ni approuvé, ni certifié par BetaSeries. Les icônes de "popcorn", viennent de flaticon.com`,
      about: [],
    },
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
    <div className="pickyMood">
        <h2 className="pickyMood-question">
         About Us
        </h2>
          
      </div>
    <div className="wrapper">
      <div className="about">
        <div className="accordion">
          {data.map((informations, i) => (
          <div key={informations.id} className="container">
            <div className="container-title" onClick={() => toggle(i)}> 
              <h2> {informations.title}</h2>
              <span> {selected === i ? '-' : '+'} </span>
            </div>
            <div className={selected === i ? 'content-show' : 'content'}>
              <p className="container-paragraph"> {informations.infos}</p>
              {informations.about.map((child) => {
                return(
                <>
                  <div className="row" key={child.id}>
                    <img className="row-img" src={child.img} alt="logo" />
                    <h4 className="row-name"> {child.name} </h4>
                    <h5 className="row-role"> {child.role}  {child.dev} </h5>
                  </div>
              </>
              )})}
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )

}

export default About;
