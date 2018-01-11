// Global DOM components.
import React, { Component } from 'react'
import { AutoComplete, FlatButton } from 'material-ui'
import { Search } from 'material-ui-icons'

// Custom global components.
import NestedDropdown from '../../inputs/NestedDropdown'

// Search form CSS.
import './SearchForm.css'

const initialState = {
  causeText: 'Cause',
  regionText: 'Region',
  formHighlighted: '',
  causeSelectOpened: false,
  regionSelectOpened: false,
}

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = initialState

    this.setCauseWrapperRef = this.setCauseWrapperRef.bind(this)
    this.setRegionWrapperRef = this.setRegionWrapperRef.bind(this)
    this.setFormWrapperRef = this.setFormWrapperRef.bind(this)
    this.handleClickOutsideElement = this.handleClickOutsideElement.bind(this)
  }

  // Adding mousedown event listener when component is mounted.
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutsideElement)
  }

  // Removing mousedown event listener before component is unmounted.
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutsideElement)
  }

  // Binding the functions.
  setCauseWrapperRef = node => { this.causeWrapperRef = node }
  setRegionWrapperRef = node => { this.regionWrapperRef = node }
  setFormWrapperRef = node => { this.formWrapperRef = node }

  handleClickOutsideElement = event => {
    if (this.causeWrapperRef && !this.causeWrapperRef.contains(event.target)) {
      this.setState({ causeSelectOpened: false })
    }

    if (this.regionWrapperRef && !this.regionWrapperRef.contains(event.target)) {
      this.setState({ regionSelectOpened: false })
    }

    if (this.formWrapperRef && !this.formWrapperRef.contains(event.target)) {
      this.setState({ formHighlighted: '' })
    }
  }

  setFormHighlighted = e => {
    this.setState({ formHighlighted: 'highlight' })
  }

  handleCauseSelection = e => {
    // Change the text of the dropdown.
    this.setState({ causeText: e.currentTarget.textContent })

    // Close the dropdown.
    this.setState({ causeSelectOpened: false })
  }

  handleRegionSelection = e => {
    // Change the text of the dropdown.
    this.setState({ regionText: e.currentTarget.textContent })

    // Close the dropdown.
    this.setState({ regionSelectOpened: false })
  }

  handleCauseSelectToggle = () => {
    this.setState({ causeSelectOpened: !this.state.causeSelectOpened })
  }

  handleRegionSelectToggle = () => {
    this.setState({ regionSelectOpened: !this.state.regionSelectOpened })
  }

  handleCauseCloseSelection = e => {
    this.setState({
      causeText: initialState.causeText,
      causeSelectOpened: false,
    })
  }

  handleRegionCloseSelection = e => {
    this.setState({
      regionText: initialState.regionText,
      regionSelectOpened: false,
    })
  }

  render() {
    const {
      searchText,
      searchAutocomplete,
      onUpdateInput,
      handleSearchRequest,
    } = this.props

    return (
      <form
        className="Header-search"
        ref={ this.setFormWrapperRef }
        onSubmit={
          e => handleSearchRequest(
            e,
            this.state.causeText,
            initialState.causeText,
            this.state.regionText,
            initialState.regionText
          )
        }
      >
        {/* Autocomplete Field */}
        <div className="Header-search-field-container">
          <AutoComplete
            className={ `Header-search__autocomplete ${ this.state.formHighlighted }` }
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

        {/* Cause Dropdown */}
        <div
          className="Header-search-field-container"
          ref={ this.setCauseWrapperRef }
        >
          <NestedDropdown
            open={ this.state.causeSelectOpened }
            primaryText={ this.state.causeText }
            formHighlighted={ this.state.formHighlighted }
            onCloseClickHandler={ this.handleCauseCloseSelection }
            onClickHandler={ this.handleCauseSelection }
            onFocusHandler={ this.setFormHighlighted }
            onNestedListToggleHandler={ this.handleCauseSelectToggle }
          />
        </div>
        {/* ENDOF: Cause Dropdown */}

        {/* Region Dropdown */}
        <div
          className="Header-search-field-container"
          ref={ this.setRegionWrapperRef }
        >
          <NestedDropdown
            open={ this.state.regionSelectOpened }
            primaryText={ this.state.regionText }
            formHighlighted={ this.state.formHighlighted }
            onCloseClickHandler={ this.handleRegionCloseSelection }
            onClickHandler={ this.handleRegionSelection }
            onFocusHandler={ this.setFormHighlighted }
            onNestedListToggleHandler={ this.handleRegionSelectToggle }
          />
        </div>
        {/* ENDOF: Region Dropdown */}

        <FlatButton
          type="submit"
          icon={ <Search className="Header-search__submit-icon" /> }
          className="Header-search__submit"
        />
      </form>
    )
  }
}

export default SearchForm
