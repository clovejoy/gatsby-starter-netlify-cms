import React from 'react'
import PropTypes from 'prop-types'
import { LeaderPageTemplate } from '../../templates/leader-page'

const LeaderPagePreview = ({ entry, widgetFor }) => (
  <LeaderPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

LeaderPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LeaderPagePreview
