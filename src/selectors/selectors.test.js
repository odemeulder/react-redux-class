import expect from 'expect'
import {authorsFormattedForDropdown} from './selector'

describe('Author selectors', () => {

    it('should return author data formatted for use in a dropdown', () => {
        const authors = [
            { id: 'odm', firstName: 'Olivier', lastName: 'De Meulder'},
            { id: 'adm', firstName: 'Allison', lastName: 'De Meulder'}
        ]
        const expected = [
            { value: 'odm', text: 'Olivier De Meulder'},
            { value: 'adm', text: 'Allison De Meulder'}
        ]
        expect(authorsFormattedForDropdown(authors)).toEqual(expected)
    })

})