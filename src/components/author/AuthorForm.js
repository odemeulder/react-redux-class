import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'

const AuthorForm = ({author, onSave, saving, errors, onChange}) => {
  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput name="firstName"
                 value={author.firstName}
                 label="First Name"
                 placeHolder="e.g. olivier" 
                 error={errors.firstName}
                 onChange={onChange} />    
      <TextInput name="lastName"
                 value={author.lastName}
                 label="Last Name"
                 placeHolder="e.g. de meulder" 
                 error={errors.lastName}
                 onChange={onChange} />
      <TextInput name="twitter"
                 value={author.twitter}
                 label="Twitter Handle"
                 placeHolder="@twitter"
                 error={errors.twitter}
                 onChange={onChange} />
      <input type="submit" 
              disabled={saving}
              value={saving ? 'saving...' : 'Save'} 
              className="btn btn-primary" 
              onClick={onSave} />
    </form>
  )
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
}

export default AuthorForm