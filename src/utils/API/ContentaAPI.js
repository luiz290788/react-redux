import React from 'react'
import { AlarmOn, Check, NewReleases } from 'material-ui-icons'

const api = 'http://dev.grant-connect.furthermore.ca'

const headers = {
  Authorization: 'Basic dGhlcmVmb3JlOmFjY2Vzcw==',
}

// Getting all regions.
export const getAllRegions = () =>
  fetch(`${api}/jsonapi/taxonomy_term/regions`, {
    method: 'GET',
    headers
  }).then(res => res.json()).then(data => data)

export const search = (keywords, cause, region) => {
  return [{
    nid: 1,
    label: "The Ontario Trillium Foundation",
    teaser: "Community and Economic Development, Human Services, Arts and Culture, Education, Environment...",
    notificationIcon: <NewReleases />,
    notification: "New profile",
    typicalGift: "25,000",
    buttonLabel: "Add to Pipeline",
    buttonClass: 'add',
    requestStatusIcon: <Check />,
    requestStatus: "Open to Requests",
    revenue: "25,000,000",
    deadlineIcon: <AlarmOn />,
    deadlineClass: 'red',
    deadline: "Deadline for Ontario Youth Program: January 15, 2018",
  },
  {
    nid: 2,
    label: "The Ontario Trillium Foundation",
    teaser: "Community and Economic Development, Human Services, Arts and Culture, Education, Environment...",
    notificationIcon: <NewReleases />,
    notification: "New profile",
    typicalGift: "25,000",
    buttonLabel: "Add to Pipeline",
    buttonClass: 'add',
    requestStatusIcon: <Check />,
    requestStatus: "Open to Requests",
    revenue: "25,000,000",
    deadlineIcon: <AlarmOn />,
    deadlineClass: 'green',
    deadline: "Deadline for Ontario Youth Program: January 15, 2018",
  }]
}
