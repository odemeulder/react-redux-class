import React, { PropTypes } from 'react'

import AuthorListRow from './AuthorListRow'

const AuthorList = ({authors}) => {
    console.log('authors', authors)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Twitter Handle</th>
                    <th>Courses</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author => 
                    <AuthorListRow key={author.id} author={author} />
                )}
            </tbody>
        </table>
    )
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
}

export default AuthorList