import React, { Component } from 'react'
import { IconButton, List, ListItem } from 'material-ui'
import { Close } from 'material-ui-icons'
import './NestedDropdown.css'

class NestedDropdown extends Component {
  render() {

    const {
      formHighlighted,
      onClickHandler,
      onCloseClickHandler,
      onFocusHandler,
      onNestedListToggleHandler,
      open,
      primaryText
    } = this.props

    return (
      <List
        className={ `Header-search__select ${formHighlighted}` }
        onFocus={ onFocusHandler }
      >
        <ListItem
          className="Header-search__select-item"
          primaryText={ primaryText }
          open={ open }
          primaryTogglesNestedList={ true }
          nestedListStyle={{ padding: 0 }}
          onNestedListToggle={ onNestedListToggleHandler }
          nestedItems={[
            <ListItem
              key={ 1 }
              className="Header-search__select-item"
              primaryText="Parent 1"
              primaryTogglesNestedList={ true }
              nestedListStyle={{ padding: 0 }}
              nestedItems={[
                <ListItem
                  key={ 0 }
                  className="Header-search__select-item"
                  primaryText="All"
                  rightIconButton={
                    <IconButton onClick={ onCloseClickHandler }>
                      <Close />
                    </IconButton>
                  }
                  onClick={ onClickHandler }
                />,
                <ListItem
                  key={ 1 }
                  className="Header-search__select-item"
                  primaryText="Child 1"
                  rightIconButton={
                    <IconButton onClick={ onCloseClickHandler }>
                      <Close />
                    </IconButton>
                  }
                  onClick={ onClickHandler }
                />,
                <ListItem
                  key={ 2 }
                  className="Header-search__select-item"
                  primaryText="Child 2"
                  onClick={ onClickHandler }
                />,
                <ListItem
                  key={ 3 }
                  className="Header-search__select-item"
                  primaryText="Child 3"
                  onClick={ onClickHandler }
                />,
              ]}
            />,
            <ListItem
              key={ 2 }
              className="Header-search__select-item"
              primaryText="Parent 2"
              primaryTogglesNestedList={ true }
              nestedListStyle={{ padding: 0 }}
              nestedItems={[
                <ListItem
                  key={ 8 }
                  className="Header-search__select-item"
                  primaryText="All"
                  rightIconButton={
                    <IconButton onClick={ onCloseClickHandler }>
                      <Close />
                    </IconButton>
                  }
                  onClick={ onClickHandler }
                />,
                <ListItem
                  key={ 4 }
                  className="Header-search__select-item"
                  primaryText="Child 1"
                  rightIconButton={
                    <IconButton onClick={ onCloseClickHandler }>
                      <Close />
                    </IconButton>
                  }
                  onClick={ onClickHandler }
                />,
                <ListItem
                  key={ 5 }
                  className="Header-search__select-item"
                  primaryText="Child 2"
                  onClick={ onClickHandler }
                />,
                <ListItem
                  key={ 6 }
                  className="Header-search__select-item"
                  primaryText="Child 3"
                  onClick={ onClickHandler }
                />,
              ]}
            />,
          ]}
        />
      </List>
    )
  }
}

export default NestedDropdown
