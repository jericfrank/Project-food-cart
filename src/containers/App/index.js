import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import ContactPage from 'containers/ContactPage';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/contact' component={ContactPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
