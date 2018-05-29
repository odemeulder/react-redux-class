import React, {PropTypes}  from 'react'
import {connect} from 'react-redux'
import AuthorList from './AuthorList'

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.props.authors} />
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    authors: state.authors
  }
}

function mapDispatchToProps() {
  return {
    actions: {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage)