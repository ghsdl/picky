import React from 'react';

import { slide as Menu } from 'react-burger-menu';

import './menuburger.scss';

import closemenu from './closemenu.svg';

class MenuBurger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <div>
      <Menu
      customBurgerIcon={ <img src={closemenu} /> }
      customCrossIcon={ <img src= {closemenu} /> }
      isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}
      >
        <a onClick={() => this.closeMenu()}>Picky Find</a>
        <a onClick={() => this.closeMenu()}>Picky Mood</a>
        <a onClick={() => this.closeMenu()}>Picky Wish</a>
        <a onClick={() => this.closeMenu()}>A propos</a>
      </Menu>
      </div>
    );
  }
};

export default MenuBurger;
