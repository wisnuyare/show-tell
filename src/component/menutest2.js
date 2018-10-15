import React, { Component } from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class MenuTest2 extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
          <Menu fluid vertical tabular>
            <Menu.Item as={Link} to="/firstpost1" name='First' active={activeItem === 'First'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/secondpost1" name='Second' active={activeItem === 'Second'} onClick={this.handleItemClick} />
            <Menu.Item as={Link} to="/thirdpost1" name='Third' active={activeItem === 'Third'} onClick={this.handleItemClick}/>            
          </Menu>        
    )
  }
}

export default withRouter(MenuTest2)

