import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Loader from 'components/Loader';

import { socialSignin } from './actions';

class CallbackPage extends Component {
    componentDidMount() {
        //
        const { code }     = queryString.parse( this.props.location.search );
        const { provider } = this.props.match.params;

        this.props.socialSignin({ provider, code });
    }

    render() {
        return (
            <Loader />
        );
    }
}

export function mapDispatchToProps ( dispatch ) {
    return {
        socialSignin : ( payload ) => dispatch( socialSignin( payload ) )
    };
}

export default connect( null, mapDispatchToProps )( CallbackPage );