// Global DOM components.
import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { MuiThemeProvider, Snackbar } from 'material-ui'
import { Grid } from 'react-flexbox-grid'

// Redux.
import { connect } from 'react-redux'
import { toggleLeftMenu } from '../actions'

// Custom global components.
import LeftMenu from './global/drawer/LeftMenu'
import HeaderBar from './global/header/HeaderBar'
import SearchForm from './global/header/SearchForm'
import SearchFormMobile from './global/header/SearchFormMobile'

// API calls.
import * as GrantConnectAPI from '../utils/API/ContentaAPI'

// Controllers.
import * as SearchController from '../controllers/SearchController'

// Custom Pages.
import SearchPage from '../pages/search/SearchPage'

// Global CSS.
import './App.css'

// Check if there is any search on the URL.
const locationSearch = require('query-string')
const queryStrings = locationSearch.parse(window.location.search)

let searchText = (typeof queryStrings.keyword !== 'undefined')
  ? queryStrings.keyword
  : ''

class App extends Component {
  state = {
    searchText: searchText,
    searchAutocompleteData: [],
    searchResults: [],
  }

  /* Search handlers */
  componentDidMount() {
    const { searchText } = this.state

    // @TODO: CHeck if the url is /search.
    this.callSearchApi(searchText)
  }

  /* Function to handle the autocomplete change. */
  onUpdateInput = searchText => {
    let searchAutocompleteData = SearchController.getFunderResultData(searchText)
    this.setState({ searchAutocompleteData, searchText })
  }

  handleSearchRequest = (e, causeText, initialCauseText, regionText, initialRegionText) => {
    const { searchText } = this.state

    // Call a function to get the search arguments properly.
    let searchArguments = SearchController.getSearchArguments(
      searchText,
      causeText,
      initialCauseText,
      regionText,
      initialRegionText,
      locationSearch
    )

    this.props.history.push({
      pathname: '/search',
      search: searchArguments
    })

    this.callSearchApi(searchText)

    // Prevent the default form submission behavior on pressing [ Enter ].
    e.preventDefault()
  }

  callSearchApi(searchText) {
    GrantConnectAPI.getAllRegions().then(data => {
      console.log(data.data)
    })

    this.setState({ searchResults: GrantConnectAPI.search(searchText) })
  }
  /* ENDOF: Search handlers */

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {/* Left Drawer Menu */}
          <LeftMenu
            onCloseIconButtonClick={ this.props.toggleLeftMenu }
            showMenu={ this.props.leftMenu.opened }
          />
          {/* ENDOF: Left Drawer Menu */}

          {/* Header Components */}
          <header className="App-header">
            {/* Header AppBar */}
            <HeaderBar onLeftIconButtonClick={ this.props.toggleLeftMenu } />
            {/* ENDOF: Header AppBar */}

            {/* Search From Component */}
            <MediaQuery query="(min-width: 768px)">
              {/* Complete Search form */}
              <SearchForm
                searchText={ this.state.searchText }
                searchAutocomplete={ this.state.searchAutocompleteData }
                onUpdateInput={ this.onUpdateInput }
                handleSearchRequest={ this.handleSearchRequest }
              />
              {/* ENDOF: Complete Search form */}
            </MediaQuery>
            <MediaQuery query="(max-width: 767px)">
              {/* Mobile Search form */}
              <SearchFormMobile
                searchText={ this.state.searchText }
                searchAutocomplete={ this.state.searchAutocompleteData }
                onUpdateInput={ this.onUpdateInput }
                handleSearchRequest={ this.handleSearchRequest }
              />
              {/* ENDOF: Mobile Search form */}
            </MediaQuery>
            {/* ENDOF: Search From Component */}
          </header>
          {/* ENDOF: Header Components */}

          {/* Environment message */}
          <Snackbar
            open={ true }
            message={`You are running this application in ${process.env.NODE_ENV} mode.`}
            autoHideDuration={ 2000 }
          />
          {/* ENDOF: Environment message */}

          {/* Search Page */}
          <Grid>
            <Route path="/search" exact render={({ history }) => (
              <SearchPage
                history={ history }
                searchText={ this.state.searchText }
                searchResults={ this.state.searchResults }
              />
            )}/>
          </Grid>
          {/* ENDOF: Search Page */}
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  leftMenu: state.leftMenu,
})

const mapDispatchToProps = {
  toggleLeftMenu
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App))
