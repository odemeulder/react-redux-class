import React from 'react'
import expect from 'expect'
import {mount, shallow} from 'enzyme'
import CourseForm from './CourseForm'

function setup(saving) {

    let props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    }
    return shallow(<CourseForm {...props} />)
}

describe('CoursesForm via Enzyme', () => {
    it('renders form and h1', () => {
        const wrapper = setup(false)
        expect(wrapper.find('form').length).toBe(1)
        expect(wrapper.find('h1').text()).toBe('Manage Course')
    })

    it('button should say save when it is not saving', () => {
        const wrapper = setup(false)
        expect(wrapper.find('input').props().value).toBe('Save')
    })
    it('button should say save when it is not saving', () => {
        const wrapper = setup(true)
        expect(wrapper.find('input').props().value).toBe('saving...')
    })
})