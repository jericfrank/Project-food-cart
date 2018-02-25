import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { WelcomePageWrapper } from './css';

class WelcomePage extends Component {
	componentDidMount() {
		// 
	}

    render() {
        return (
            <WelcomePageWrapper>
                <h1>Welcome Page</h1>
                <Link to="/home">
                    <Button type="primary">
                        Try it today <Icon type="arrow-right" />
                    </Button>
                </Link>
            </WelcomePageWrapper>
        );
    }
}

export default WelcomePage;
