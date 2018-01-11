import React from 'react'
import { Drawer, IconButton, MenuItem } from 'material-ui'
import { Close } from 'material-ui-icons'
import { Link } from 'react-router-dom'
import './LeftMenu.css'

function LeftMenu(props) {
  const { showMenu, onCloseIconButtonClick } = props

  return (
    <div className="Left-menu">
      <Drawer
        width={ 310 }
        open={ showMenu }
        docked={ false }
        containerClassName="Left-menu__wrapper"
      >
        <IconButton>
          <Close onClick={ onCloseIconButtonClick } />
        </IconButton>
        <MenuItem>
          <Link to="/">Support</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">Privacy Policy</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">Terms of Use</Link>
        </MenuItem>
        <hr />
        <MenuItem>
          <Link to="/">Imagine Canada</Link>
        </MenuItem>
      </Drawer>
    </div>
  )
}

export default LeftMenu
