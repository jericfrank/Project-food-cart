import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import ContactPage from 'containers/ContactPage';
import SignInPage from 'containers/SignInPage';

import HeaderWrapper from 'containers/HeaderWrapper';

import Callback from 'components/Callback';

import { LayoutWrapper, ContentWrapper, Content, FooterWrapper } from './css';

class App extends Component {
    render() {
        return (
            <LayoutWrapper>
                <ContentWrapper>
                    <HeaderWrapper />
                    <Content>
                        <Switch>
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/contact' component={ContactPage}/>
                            <Route path='/signin' component={SignInPage}/>
                            <Route path='/callback/:provider' component={Callback}/>
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
