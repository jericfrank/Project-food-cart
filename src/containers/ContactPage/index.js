import React, { Component } from 'react';
import Axios from 'axios';

Axios.defaults.headers.common['Content-Type'] = 'application/json';

class ContactPage extends Component {
	componentDidMount() {
		// const pairs = this.props.location.search.slice(1).split('&');
		// const result = {};
		
		// pairs.forEach(function(pair) {
		//     pair = pair.split('=');
		//     result[pair[0]] = decodeURIComponent(pair[1] || '');
		// });

		// Axios.get(`http://localhost:8000/api/login/github/callback?code=${result.code}`)
		//   .then(function (response) {
		//     console.log(response);
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		//   });
	}

    render() {
        return (
            <div>
                ContactPage
            </div>
        );
    }
}

export default ContactPage;
