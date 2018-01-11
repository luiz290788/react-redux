// Global DOM components.
import React, { Component } from 'react'
import { AutoComplete, FlatButton, IconButton } from 'material-ui'
import { ArrowBack, Search } from 'material-ui-icons'

// Search form CSS.
import './SearchFormMobile.css'

class SearchFormMobile extends Component {
  state = {
    showSearchForm: false
  }

  handleSearchIconClick = (e, showSearchForm) => {
    this.setState({ showSearchForm })
  }

  render() {
    const {
      searchText,
      searchAutocomplete,
      onUpdateInput,
      handleSearchRequest,
    } = this.props

    return (
      <div>
        { this.state.showSearchForm &&
          <form
            className="Header-search Header-search-mobile"
            ref={ this.setFormWrapperRef }
            onSubmit={ handleSearchRequest }
          >
            <IconButton onClick={ e => this.handleSearchIconClick(e, false) }>
              <ArrowBack />
            </IconButton>
            {/* Autocomplete Field */}
            <div className="Header-search-mobile-field-container">
              <AutoComplete
                className={ `Header-search__autocomplete` }
                menuCloseDelay={ 0 }
                openOnFocus={ true }
                underlineShow={ false }
                hintText="Funder or keyword"
                searchText={ searchText }
                dataSource={ searchAutocomplete }
                onFocus={ this.setFormHighlighted }
                onUpdateInput={ onUpdateInput }
                fullWidth={ true }
              />
            </div>
            {/* ENDOF: Autocomplete Field */}

            <FlatButton
              type="submit"
              icon={ <Search className="Header-search__submit-icon" /> }
              className="Header-search__submit"
            />
          </form>
        }

        { !this.state.showSearchForm &&
          <IconButton
            className="Header-search__open-search"
            onClick={ e => this.handleSearchIconClick(e, true) }
          >
            <Search />
          </IconButton>
        }
      </div>
    )
  }
}

export default SearchFormMobile
