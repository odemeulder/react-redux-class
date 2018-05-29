import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import { connect } from 'react-redux'

class Header extends React.Component {

  render() {
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>{this.props.courseCount ? ` (${this.props.courseCount})` : ''}
        {" | "}
        <Link to="/authors" activeClassName="active">Authors</Link>{this.props.authorCount ? ` (${this.props.authorCount})` : ''}
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {this.props.loading && <LoadingDots interval={100} dots={20} />}
      </nav>      
    )
  }
}

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  authorCount: React.PropTypes.number,
  courseCount: React.PropTypes.number
};

function mapStateToProps(state) {
  return {
    'authorCount': state.authors.length,
    'courseCount': state.courses.length
  }
}

export default connect(mapStateToProps)(Header);