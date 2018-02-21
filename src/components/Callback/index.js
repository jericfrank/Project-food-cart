import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

class Callback extends Component {
    componentDidMount() {

        const { code }     = queryString.parse( this.props.location.search );
        const { provider } = this.props.match.params;

        axios.get(`http://127.0.0.1:8000/login/${provider}/callback?code=${code}`)
          .then( (response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
          <Redirect to="/"/>
        );
    }
}

export default Callback;
