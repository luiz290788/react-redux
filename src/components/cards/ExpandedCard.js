import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { FlatButton, Menu, MenuItem, IconButton, Paper, Popover } from 'material-ui'
import { AttachMoney, Close, MoreVert } from 'material-ui-icons'
import './ExpandedCard.css'

class ExpandedCard extends Component {
  state = {
    showExpandedCardActionsMenu: false,
  }

  handleActionsClick = e => {
    this.setState({
      showExpandedCardActionsMenu: true,
      anchorEl: e.currentTarget,
    })

    e.preventDefault()
  }

  handleRequestClose = () => {
    this.setState({ showExpandedCardActionsMenu: false })
  }

  render() {
    const {
      label,
      teaser,
      notificationIcon,
      notification,
      typicalGift,
      buttonLabel,
      buttonClass,
      requestStatusIcon,
      requestStatus,
      revenue,
      deadlineIcon,
      deadlineClass,
      deadline
    } = this.props

    return (
      <Paper
        className={ `Material-cards Material-cards__expanded ${ deadlineClass }` }
        zDepth={ 0 }
      >
        <Row>
          <Col xs={12} md={5}>
            <h3>{ label }</h3>
            <div className="Material-cards__expanded-teaser">
              <small>{ teaser }</small>
            </div>
            <div className="Material-cards__expanded-notification">
              <small>{ notificationIcon } { notification }</small>
            </div>
          </Col>
          <Col xs={12} md={7} className="Material-cards__expanded-right">
            <div className="Material-cards__expanded-actions-wrapper">
              <small className="Material-cards__expanded-typical-gift">
                <strong>{ typicalGift }</strong>
              </small>
              <FlatButton
                className={ `Material-cards__expanded-state ${ buttonClass }` }
                label={ buttonLabel }
              />
              <IconButton
                className="Material-cards__expanded-actions"
                onClick={ this.handleActionsClick }
              >
                <MoreVert />
              </IconButton>
              <Popover
                open={ this.state.showExpandedCardActionsMenu }
                anchorEl={ this.state.anchorEl }
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                onRequestClose={ this.handleRequestClose }
              >
                <Menu className="Material-cards__expanded-actions-menu-wrapper">
                  <IconButton onClick={ this.handleRequestClose }>
                    <Close />
                  </IconButton>
                  <MenuItem
                    className="Material-cards__expanded-actions-item"
                    primaryText="Add Note"
                  />
                  <hr />
                  <MenuItem
                    className="Material-cards__expanded-actions-item"
                    primaryText="Won"
                  />
                  <MenuItem
                    className="Material-cards__expanded-actions-item"
                    primaryText="Lost"
                  />
                  <MenuItem
                    className="Material-cards__expanded-actions-item"
                    primaryText="Archive"
                  />
                  <MenuItem
                    className="Material-cards__expanded-actions-item"
                    primaryText="Remove"
                  />
                </Menu>
              </Popover>
            </div>
            <div className="Material-cards__expanded-status">
              <small>{ requestStatusIcon } { requestStatus }</small>
              <small><AttachMoney /> { revenue }</small>
            </div>
            <div className={ `Material-cards__expanded-deadline ${ deadlineClass }` }>
              <small>{ deadlineIcon } { deadline }</small>
            </div>
          </Col>
        </Row>
      </Paper>
    )
  }
}

export default ExpandedCard
