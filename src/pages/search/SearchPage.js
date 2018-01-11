// Global DOM components.
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import { Row, Col } from 'react-flexbox-grid'
import { IconButton } from 'material-ui'
import { ViewList, ViewStream } from 'material-ui-icons'

// Custom search components.
import SearchPageFilters from './components/filters/SearchPageFilters'
import SearchPageFacets from './components/facets/SearchPageFacets'

// Custom global components.
import ExpandedCard from '../../components/cards/ExpandedCard'
import CollapsedCard from '../../components/cards/CollapsedCard'

// Search page CSS.
import './SearchPage.css'

const hasCardsView = typeof localStorage.cardsView !== 'undefined'

class SearchPage extends Component {
  state = {
    cardsView: hasCardsView
      ? localStorage.cardsView
      : 'expanded',
    expandedActive: hasCardsView && localStorage.cardsView === 'expanded'
      ? 'active'
      : '',
    collapsedActive: hasCardsView && localStorage.cardsView === 'collapsed'
      ? 'active'
      : '',
  }

  handleCardsView = (e, cardsView) => {
    // Update the state to show the view according to user selection.
    this.setState({ cardsView })

    if (cardsView === 'expanded') {
      this.setState({ expandedActive: 'active' })
      this.setState({ collapsedActive: '' })
    } else {
      this.setState({ collapsedActive: 'active' })
      this.setState({ expandedActive: '' })
    }

    // Store the selction for when the user comes back to the page.
    localStorage.setItem('cardsView', cardsView)
  }

  render() {
    const { history, searchText } = this.props

    return (
      <Row>
        {/* Left column */}
        <Col xs={ 12 } md={ 3 }>
          {/* Search facets: /src/pages/pages/components/facets/SearchPageFacets.js */}
          <SearchPageFacets />
          {/* ENDOF: Search facets */}
        </Col>
        {/* ENDOF: Left column */}

        {/* Right column */}
        <Col xs={ 12 } md={ 9 }>
          {/* Search filters: /src/pages/pages/components/filters/SearchPageFilters.js */}
          <Row>
            <SearchPageFilters />
          </Row>
          {/* ENDOF: Search filters */}

          <Row>
            <Col xs={ 6 } md={ 10 }>
              {/* Results count */}
              <h2 className="Search-page__results">
                {/* In case the search was performed with no keywords */}
                { !searchText &&
                  `Showing all Results`
                }

                {/* Default text for search using keywords */}
                { (searchText && history.action === 'PUSH') &&
                  `357 Results for "${ searchText }"`
                }
              </h2>
              {/* ENDOF: Results count */}
            </Col>

            <MediaQuery query="(min-width: 768px)">
              <Col md={ 2 }>
                <div className="Search-page__view Search-page__view">
                  {/* Expanded Cards view icon */}
                  <IconButton
                    className={ `Search-page__view Search-page__view-expanded ${this.state.expandedActive}` }
                    onClick={ e => this.handleCardsView(e, 'expanded') }
                  >
                    <ViewStream />
                  </IconButton>
                  {/* ENDOF: Expanded Cards view icon */}

                  {/* Collapsed Cards view icon */}
                  <IconButton
                    className={ `Search-page__view Search-page__view-collapsed ${this.state.collapsedActive}` }
                    onClick={ e => this.handleCardsView(e, 'collapsed') }
                  >
                    <ViewList />
                  </IconButton>
                  {/* ENDOF: Collapsed Cards view icon */}
                </div>
              </Col>
            </MediaQuery>
          </Row>

          <Row>
            {/* Expanded Card: /src/components/cards/ExpandedCard.js */}
            { this.state.cardsView === 'expanded' &&
              this.props.searchResults.map(result => {
                return (
                  <ExpandedCard
                    key={ result.nid }
                    label={ result.label }
                    teaser={ result.teaser }
                    notificationIcon={ result.notificationIcon }
                    notification={ result.notification }
                    typicalGift={ result.typicalGift }
                    buttonLabel={ result.buttonLabel }
                    buttonClass={ result.buttonClass }
                    requestStatusIcon={ result.requestStatusIcon }
                    requestStatus={ result.requestStatus }
                    revenue={ result.revenue }
                    deadlineIcon={ result.deadlineIcon }
                    deadlineClass={ result.deadlineClass }
                    deadline={ result.deadline }
                  />
                )
              })
            }
            {/* ENDOF: Expanded Card */}

            {/* Collapsed Card: /src/components/cards/CollapsedCard.js */}
            { this.state.cardsView === 'collapsed' &&
              this.props.searchResults.map(result => {
                return (
                  <CollapsedCard
                    label={ result.label }
                    typicalGift={ result.typicalGift }
                    revenue={ result.revenue }
                    deadline={ result.deadline }
                    buttonLabel={ result.buttonLabel }
                    buttonClass={ result.buttonClass }
                  />
                )
              })
            }
            {/* ENDOF: Collapsed Card */}
          </Row>
        </Col>
        {/* ENDOF: Right column */}
      </Row>
    )
  }
}

export default SearchPage
