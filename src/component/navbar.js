import React, {Component} from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class NavbarLeft extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return (
    <Menu inverted>
      <Menu.Item color='teal' name='multi page app' as={NavLink} to="/thirdApp" active={activeItem === 'multi page app'} onClick={this.handleItemClick}/>
      <Menu.Item color='teal' name='single page app' as={NavLink} to="/secApp" active={activeItem === 'single page app'} onClick={this.handleItemClick}/>
      <Menu.Item color='teal' name='conclusion' as={Link} to="/compare" active={activeItem === 'compare'} onClick={this.handleItemClick}/>
    </Menu>
   )
 }
}

export default withRouter(NavbarLeft);