import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthorForm from './AuthorForm'
import * as authorActions from '../../actions/authorActions'
import toastr from 'toastr'

class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false
    }

    this.updateState = this.updateState.bind(this)
    this.saveAuthor  = this.saveAuthor.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.author.id != nextProps.author.id) {
        this.setState({author: Object.assign({}, nextProps.author)})
    }
  }

  updateState(event) {
    const field = event.target.name;
    let author = this.state.author;
    author[field] = event.target.value;
    return this.setState({author: author});
  }

  redirect() {
    this.setState({saving: false})
    toastr.success('author saved')
    this.context.router.push('/authors')
  }

  saveAuthor(event) {
    event.preventDefault()
    this.setState({saving: true})
    this.props.actions.saveAuthor(this.state.author)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error)
        this.setState({saving: false})
      })
  }
  
  render() {
    return (
      <AuthorForm author={this.state.author}
                  onSave={this.saveAuthor}
                  onChange={this.updateState}
                  errors={this.state.errors}
                  saving={this.state.saving} />
    )
  }
}

ManageAuthorPage.propTypes = {
  'author': PropTypes.object,
  'actions': PropTypes.object
}

ManageAuthorPage.contextTypes = {
  'router': PropTypes.object
}

function mapStateToProps (state, ownProps) {
  const authorId = ownProps.params.id
  let author = { 
    'id': '',
    'firstName': '',
    'lastName': ''
  }
  if (authorId && state.authors.length) {
    let match = state.authors.find(author => author.id === authorId)
    if (match) author = match
  }
  return {
    'author': author
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage)