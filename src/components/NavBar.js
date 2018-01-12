import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Menu.Menu position='right'>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/characters'>
            <Menu.Item name='Characters' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

export default NavBar;
