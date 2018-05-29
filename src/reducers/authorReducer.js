import * as types from '../actions/actionTypes'
import initialState from './initialState'
import { addCourseToAuthor } from '../actions/courseActions';

function createAuthorReducer(state, action) {
    return [
        ...state,
        Object.assign({}, action.author)
    ]
}

function updateAuthorReducer(state, action) {
    return [
        ...state.filter(author => author.id != action.author.id),
        Object.assign({}, action.author)
    ]
}

function addCourseToAuthorReducer(state, action) {
    let author = Object.assign({}, state.filter(author => author.id === action.course.authorId)[0] || {})
    if (!Object.keys(author).length) {
        return state
    }
    author.courses = [ ...author.courses, action.course]
    return [
        ...state.filter(author => author.id != action.course.authorId),
        author
    ]
}

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        case types.CREATE_AUTHOR_SUCCESS:
            return createAuthorReducer(state, action)
        case types.UPDATE_AUTHOR_SUCCESS:
            return updateAuthorReducer(state, action)
        case types.ADD_COURSE_TO_AUTHOR:
            return addCourseToAuthorReducer(state, action)
        default:
            return state;
    }
}