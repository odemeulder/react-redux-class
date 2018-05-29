import expect from 'expect'
import courseReducer from './courseReducer'
import * as actions from '../actions/courseActions'

describe('Course Reducer', () => {
    it('Load courses should return all courses', () => {
        // arrange
        const courses = [
            { id: 'abc', title: 'Course abc', author: 'Olivier' },
            { id: 'def', title: 'Course def', author: 'Cory' }
        ]
        const action = actions.loadCoursesSuccess(courses)

        // action
        const reducedState = courseReducer([], action)

        // assert
        expect(reducedState).toEqual(courses)       
    })

    it('Update should reduce state correctly', () => {
        // arrange
        const initState = [
            { id: 'abc', title: 'Course abc', author: 'Olivier' },
            { id: 'def', title: 'Course def', author: 'Cory' }
        ]
        const newCourse = { id: 'def', title: 'Course def (new)', author: 'Melanie' }
        const action = actions.updateCourseSuccess(newCourse)
        const expectedState = [
            { id: 'abc', title: 'Course abc', author: 'Olivier' },
            { id: 'def', title: 'Course def (new)', author: 'Melanie' }
        ]

        // act
        const reducedState = courseReducer(initState, action)

        // assert
        expect(reducedState).toEqual(expectedState)
    })

    it('Create should reduce state correctly', () => {
        // arrange
        const initState = [
            { id: 'abc', title: 'Course abc', author: 'Olivier' },
            { id: 'def', title: 'Course def', author: 'Cory' }
        ]
        const updatedCourse = { id: 'ghi', title: 'Course ghi', author: 'Melanie' }
        const action = actions.createCourseSuccess(updatedCourse)

        const expectedState = [
            { id: 'abc', title: 'Course abc', author: 'Olivier' },
            { id: 'def', title: 'Course def', author: 'Cory' },
            { id: 'ghi', title: 'Course ghi', author: 'Melanie' }
        ]

        // act
        const reducedState = courseReducer(initState, action)

        // assert
        expect(reducedState).toEqual(expectedState)
    })
})
