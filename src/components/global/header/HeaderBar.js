import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, FlatButton, IconButton, Menu, MenuItem, Popover } from 'material-ui'
import { Menu as MenuIcon, AccountCircle } from 'material-ui-icons'
import logo from '../../../logo.svg'
import './HeaderBar.css'

class HeaderBar extends Component {
  state = {
    showAccountMenu: false
  }

  handleAccountMenuClick = e => {
    // This prevents ghost click.
    e.preventDefault()

    this.setState({
      showAccountMenu: true,
      anchorEl: e.currentTarget,
    })
  }

  handleAccountMenuClose = () => {
    this.setState({
      showAccountMenu: false,
    })
  }

  render() {
    const { onLeftIconButtonClick } = this.props

    return (
      <AppBar
        className="Header-wrapper"
        iconElementLeft={
          <IconButton>
            <MenuIcon className="Header-icon" />
          </IconButton>
        }
        onLeftIconButtonClick={ onLeftIconButtonClick }
        iconElementRight={
          <div>
            <Link to="/">
              <FlatButton className="Header-button" label="FR" />
            </Link>
            {/* Account Menu */}
            <IconButton onClick={ this.handleAccountMenuClick }>
              <AccountCircle className="Header-icon-account"/>
            </IconButton>
            <Popover
              open={ this.state.showAccountMenu }
              anchorEl={ this.state.anchorEl }
              onRequestClose={ this.handleAccountMenuClose }
              className="Header-popover"
            >
              <Menu>
                <MenuItem
                  onClick={ this.handleAccountMenuClose }
                  primaryText="Manage Account"
                />
                <MenuItem
                  onClick={ this.handleAccountMenuClose }
                  primaryText="Logout"
                />
              </Menu>
            </Popover>
            {/* ENDOF: Account Menu */}
          </div>
        }
        title={
          <Link to="/">
            <img src={ logo } className="App-logo" alt="logo" />
          </Link>
        }
      />
    )
  }
}

export default HeaderBar
