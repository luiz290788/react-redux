// Function to get the results from the search autocomplete field.
export const getFunderResultData = searchText => {
  return [
    searchText,
    searchText + searchText,
    'search ' + searchText,
  ]
}

// Function to get the query string for the search, according to the
// selected filters.
export const getSearchArguments = (
  searchText,
  causeText,
  initialCauseText,
  regionText,
  initialRegionText,
  locationSearch
) => {
  let searchArguments = {}
  let searchString = ''

  searchArguments = regionText !== initialRegionText
    ? Object.assign(searchArguments, { region: regionText })
    : searchArguments

  searchArguments = causeText !== initialCauseText
    ? Object.assign(searchArguments, { cause: causeText })
    : searchArguments

  searchArguments = searchText !== ''
    ? Object.assign(searchArguments, { keyword: searchText })
    : searchArguments

  searchString = locationSearch.stringify(searchArguments)

  return searchString
}
