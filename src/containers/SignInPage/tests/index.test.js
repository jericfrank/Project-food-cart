import React from 'react';
import { mount } from 'enzyme';

import { Router, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from 'store.js';

import { Form, Button } from 'antd';
import { fromJS } from 'immutable';
import { Field } from 'redux-form/immutable';

import Alert from 'components/Alert';
import { SignInPage, mapDispatchToProps } from 'containers/SignInPage';
import { authSignin, authSocialUrl, authError } from 'containers/SignInPage/actions';

describe('<SignInPage />', () => {
    let component;
    let props;

    beforeEach( () => {
        props = {
            onAuthSignin : jest.fn(),
            errorMsg     : ''
        };
    } );

    describe( 'onMount', () => {
        beforeEach( () => {
            component = mount(
                <Provider store={store}>
                    <Router history={history}>
                        <SignInPage {...props}/>
                    </Router>
                </Provider>
            );
        } );

        it('renders <Alert /> component', () => {
            expect( component.find( Alert ) ).toHaveLength( 1 );
        } );

        it('renders <Form /> component', () => {
            expect( component.find( Form ) ).toHaveLength( 1 );
        } );

        it('renders 2 <Field /> component', () => {
            expect( component.find( Field ) ).toHaveLength( 2 );
        } );

        it('renders 4 <Button /> component', () => {
            expect( component.find( Button ) ).toHaveLength( 4 );
        } );
    } );

    describe( 'onSubmitForm', () => {
        describe( 'success', () => {
            beforeEach( () => {
                props.authenticate = true;
                component = mount(
                    <Provider store={store}>
                        <Router history={history}>
                            <SignInPage {...props}/>
                        </Router>
                    </Provider>
                );
            } );

            it( 'should redirect to `/home` if authenticated', () => {
                expect( component.find( Redirect ).props().to ).toEqual( '/home' );
            } );
        } );

        describe( 'error', () => {
            beforeEach( () => {
                props.errorMsg = 'error message';
                component = mount(
                    <Provider store={store}>
                        <Router history={history}>
                            <SignInPage {...props}/>
                        </Router>
                    </Provider>
                );
            } );

            it( 'should render error message', () => {
                expect( component.find( '.ant-alert-message' ).text() ).toEqual( 'error message' );
            } );
        } );
    } );

    describe( 'mapDispatchToProps', () => {
        describe( 'onAuthSignin', () => {
            it( 'should be injected', () => {
                const dispatch = jest.fn();
                const result   = mapDispatchToProps( dispatch );
                expect( result.onAuthSignin ).toBeDefined();
            } );

            it( 'should dispatch `onAuthSignin` when called', () => {
                const dispatch = jest.fn();
                const result   = mapDispatchToProps( dispatch );
                const payload  = fromJS({
                    email    : 'sample@email.com',
                    password : 'secret'
                });
                result.onAuthSignin( payload );
                expect( dispatch ).toHaveBeenCalledWith( authSignin( payload.toJS() ) );
            } );
        } );

        describe( 'onAuthSocialUrl', () => {
            it( 'should be injected', () => {
                const dispatch = jest.fn();
                const result   = mapDispatchToProps( dispatch );
                expect( result.onAuthSocialUrl ).toBeDefined();
            } );

            it( 'should dispatch `onAuthSocialUrl` when called', () => {
                const dispatch = jest.fn();
                const result   = mapDispatchToProps( dispatch );
                const payload  = { target: { name: 'provider' } };
                result.onAuthSocialUrl( payload );
                expect( dispatch ).toHaveBeenCalledWith( authSocialUrl( 'provider' ) );
            } );
        } );
    } );
} );