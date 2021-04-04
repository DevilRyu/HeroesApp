import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router';


describe('Pruebas en <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    };

   
    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/hero']}>
                <HeroScreen
                    history={historyMock}
                />
            </MemoryRouter>
        );
    
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Redirect').exists()).toBe(true);

    });

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/hero/marvel-spider']}>
                <Route path="/HeroesApp/hero/:heroId" component={HeroScreen}/>
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('debe de regresar a la pantalla anterior con PUSH', () => {

        const historyMock = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/hero/marvel-spider']}>
                <Route 
                    path="/HeroesApp/hero/:heroId" 
                    component={() => <HeroScreen history= {historyMock}/>}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).not.toHaveBeenCalled();

    });

    test('debe de regresar a la pantalla anterior con GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/hero/marvel-spider']}>
                <Route 
                    path="/HeroesApp/hero/:heroId" 
                    component={() => <HeroScreen history= {historyMock}/>}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).not.toHaveBeenCalled();
        expect(historyMock.goBack).toHaveBeenCalled();

    });

    test('debe de llamar el redirect si el heroe no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/HeroesApp/hero/marvel-spiderasdads']}>
                <Route 
                    path="/HeroesApp/hero/:heroId" 
                    component={() => <HeroScreen history= {historyMock}/>}
                />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');

    });


});