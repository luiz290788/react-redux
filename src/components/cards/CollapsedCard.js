import React, { Component } from 'react'
import { FlatButton, IconMenu, MenuItem, IconButton } from 'material-ui'
import { MoreVert } from 'material-ui-icons'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import './CollapsedCard.css'

class CollapsedCard extends Component {
  render() {

    const { label, typicalGift, revenue, deadline, buttonLabel } = this.props

    return (
      <Table
        className="Material-cards__collapsed"
        selectable={ false }
      >
        <TableHeader adjustForCheckbox={ false } displaySelectAll={ false }>
          <TableRow>
            <TableHeaderColumn>Funder Name</TableHeaderColumn>
            <TableHeaderColumn>Typical Gift</TableHeaderColumn>
            <TableHeaderColumn>Upcoming Deadline</TableHeaderColumn>
            <TableHeaderColumn>Estimated Capacity</TableHeaderColumn>
            <TableHeaderColumn>Pipeline Stage</TableHeaderColumn>
            <TableHeaderColumn>{/* Action */}</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={ false }>
          <TableRow>
            <TableRowColumn>{ label }</TableRowColumn>
            <TableRowColumn>{ typicalGift }</TableRowColumn>
            <TableRowColumn>{ deadline }</TableRowColumn>
            <TableRowColumn>{ revenue }</TableRowColumn>
            <TableRowColumn>
              <FlatButton label={ buttonLabel } />
            </TableRowColumn>
            <TableRowColumn>
              <IconMenu iconButtonElement={
                <IconButton>
                  <MoreVert />
                </IconButton>
              }>
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Send feedback" />
                <MenuItem primaryText="Settings" />
              </IconMenu>
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default CollapsedCard
