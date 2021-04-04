import React from 'react';
import { mount } from 'enzyme';
import { SeacrhScreen } from '../../../components/search/SeacrhScreen';
import { MemoryRouter, Route } from 'react-router';

describe('Pruebas en <SeacrhScreen />', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/search']}>
                <Route path="/HeroesApp/search" component={SeacrhScreen} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');

    });

    test('debe de mostrar a Batman y el input con el valor del query string', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/search?q=batman']}>
                <Route path="/HeroesApp/search" component={SeacrhScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de un error si no se encuentra el hero', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/search?q=batman123']}>
                <Route path="/HeroesApp/search" component={SeacrhScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert').exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de llamar el push del history', () => {

        const historyMock = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/search?q=batman123']}>
                <Route
                    path="/HeroesApp/search"
                    component={() => <SeacrhScreen history={historyMock}/>}
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target:{
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(historyMock.push).toHaveBeenCalledWith('?q=batman');

    });

});