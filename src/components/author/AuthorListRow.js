import React, {PropTypes} from 'react'
import { Link } from 'react-router'

const AuthorListRow = ({author}) => {
  return (
    <tr>
      <td><Link to={'author/' + author.id}>{author.id}</Link></td>
      <td>{author.firstName} {author.lastName}</td>
      <td>{author.twitter}</td>
      <td>
        <ul>
          {author.courses.map(course => 
            <li key={course.id}>{course.title}</li>
          )}
        </ul>
      </td>
    </tr>
  )
}

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired
}

export default AuthorListRow