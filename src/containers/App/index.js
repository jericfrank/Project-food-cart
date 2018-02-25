import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from 'containers/WelcomePage';
import HomePage from 'containers/HomePage';
import ContactPage from 'containers/ContactPage';
import SignInPage from 'containers/SignInPage';
import CallbackPage from 'containers/CallbackPage';

import RequireAuth from 'components/Auth/require_auth';

import { LayoutWrapper, ContentWrapper, Content, FooterWrapper } from './css';

class App extends Component {
    render() {
        return (
            <LayoutWrapper>
                <ContentWrapper>
                    <Content>
                        <Switch>
                            <Route exact path='/' component={WelcomePage}/>
                            <Route path='/home' component={HomePage}/>
                            <Route path='/contact' component={RequireAuth( ContactPage )}/>
                            <Route path='/signin' component={SignInPage}/>
                            <Route path='/callback/:provider' component={CallbackPage}/>
                        </Switch>
                    </Content>
                </ContentWrapper>
                <FooterWrapper>
                    Footer © 2018
                </FooterWrapper>
            </LayoutWrapper>
        );
    }
}

export default App;
