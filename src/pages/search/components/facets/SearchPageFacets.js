import React, { Component } from 'react'
import { FlatButton, List, ListItem } from 'material-ui'
import './SearchPageFacets.css'

class SearchPageFacets extends Component {
  render() {
    // Removing the default styles for the list.
    const innerDivStyle = { padding: 10, margin: 0 }

    return (
      <div className="Search-page__facets">
        <p>
          <small>Filters</small>
          <FlatButton label="Reset" />
        </p>
        <hr />

        <List>
          <ListItem
            primaryText="Cause"
            className="Search-page__facets-item"
            initiallyOpen={ true }
            primaryTogglesNestedList={ true }
            nestedItems={[
              <ListItem
                key={1}
                className="Search-page__facets-item-child"
                primaryText="Arts and Culture (121)"
                innerDivStyle={ innerDivStyle }
              />,
              <ListItem
                key={2}
                className="Search-page__facets-item-child"
                primaryText="Education (102)"
                innerDivStyle={ innerDivStyle }
              />,
            ]}
          />
        </List>
        <hr />

        <List>
          <ListItem
            primaryText="Population Served"
            className="Search-page__facets-item"
            initiallyOpen={ true }
            primaryTogglesNestedList={ true }
            nestedItems={[
              <ListItem
                key={1}
                className="Search-page__facets-item-child"
                primaryText="Gender / Sexuality (131)"
                innerDivStyle={ innerDivStyle }
              />,
              <ListItem
                key={2}
                className="Search-page__facets-item-child"
                primaryText="Age (23)"
                innerDivStyle={ innerDivStyle }
              />,
            ]}
          />
        </List>
      </div>
    )
  }
}

export default SearchPageFacets
