import AuthorApi from '../api/mockAuthorApi'
import CourseApi from '../api/mockCourseApi'
import * as types from './actionTypes'
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions'

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors }
}

export function updateAuthorSuccess(author) {
    return { type: types.UPDATE_AUTHOR_SUCCESS, author }
}

export function createAuthorSuccess(author) {
    return { type: types.CREATE_AUTHOR_SUCCESS, author }
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall())
        return Promise.all([AuthorApi.getAllAuthors(), CourseApi.getAllCourses()])
            .then(([authors, courses]) => {
                authors.forEach(author =>
                    author.courses = [ ...courses.filter(course => course.authorId === author.id)]
                )
                return authors
            })
            .then(authors => { dispatch(loadAuthorsSuccess(authors)) })
            .catch(error => { throw(error) })
    }
}

export function saveAuthor(author) {
    return dispatch => {
        dispatch(beginAjaxCall())
        return AuthorApi.saveAuthor(author)
            .then(savedAuthor => {
                author.id 
                    ? dispatch(updateAuthorSuccess(savedAuthor))
                    : dispatch(createAuthorSuccess(savedAuthor))
            })
            .catch(error => {
                dispatch(ajaxCallError())
                throw(error)
            })
    }
}