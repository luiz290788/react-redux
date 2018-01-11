import React, { Component } from 'react'
import { MenuItem, SelectField, TextField } from 'material-ui'
import './SearchPageFilters.css'

class SearchPageFilters extends Component {
  state = {
    typicalFrom: 0,
    typicalTo: 0,
  }

  // Controlled components. Single source of true for the input values.
  handleTypicalFromChange = e => {
    this.setState({ typicalFrom: e.target.value })
  }

  // Controlled components. Single source of true for the input values.
  handleTypicalToChange = e => {
    this.setState({ typicalTo: e.target.value })
  }

  render() {
    return (
      <div className="Search-page__filters">
        <div className="Search-page__filters-language-wrapper">
          <small>Language:</small>
          <SelectField
            className="Search-page__filters-language"
            autoWidth={ true }
            value={ 0 }
            underlineShow={ false }
          >
            <MenuItem value={ 0 } primaryText="All" />
            <MenuItem value={ 1 } primaryText="French" />
            <MenuItem value={ 2 } primaryText="English" />
            <MenuItem value={ 3 } primaryText="Bilingual" />
          </SelectField>
        </div>

        <div className="Search-page__filters-requests-wrapper">
          <small>Open to Requests:</small>
          <SelectField
            className="Search-page__filters-requests"
            autoWidth={ true }
            value={ 0 }
            underlineShow={ false }
          >
            <MenuItem value={ 0 } primaryText="All" />
            <MenuItem value={ 1 } primaryText="Yes" />
            <MenuItem value={ 2 } primaryText="No" />
            <MenuItem value={ 3 } primaryText="Unknown" />
          </SelectField>
        </div>

        <div className="Search-page__filters-typical-wrapper">
          <small>Typical Gift:</small>
          <TextField
            name="Search-page__filters-typical-from"
            className="Search-page__filters-typical-from"
            fullWidth={ true }
            underlineShow={ false }
            value={ this.state.typicalFrom !== 0 ? this.state.typicalFrom : '' }
            placeholder="$0"
            onChange={ this.handleTypicalFromChange }
          />

          <small>
            <span>to</span>
          </small>
          <TextField
            name="Search-page__filters-typical-to"
            className="Search-page__filters-typical-to"
            fullWidth={ true }
            underlineShow={ false }
            value={ this.state.typicalTo !== 0 ? this.state.typicalTo : '' }
            placeholder="$ unlimited"
            onChange={ this.handleTypicalToChange }
          />
        </div>
      </div>
    )
  }
}

export default SearchPageFilters
