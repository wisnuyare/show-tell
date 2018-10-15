import React, { Component } from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class MenuTest extends Component {
  state = { activeItem: ' ' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid pointing secondary vertical>
        <Menu.Item name='first' as={Link} to="/firstpost" active={activeItem === 'first'} onClick={this.handleItemClick} />
        <Menu.Item name='second' as={Link} to="/secondpost" active={activeItem === 'second'} onClick={this.handleItemClick} />
        <Menu.Item name='third' as={Link} to="/thirdpost" active={activeItem === 'third'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default withRouter(MenuTest)