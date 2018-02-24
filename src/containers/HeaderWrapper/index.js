import React, { Component } from 'react';
import { Button } from 'antd';

import { Wrapper } from './css';

class HeaderWrapper extends Component {
    render() {
        return (
        	<Wrapper>
        		<h2 className="pull-left">Company Logo</h2>
        		<div className="pull-right">
        			<Button icon="shopping-cart">Cart(2)</Button>
        			<Button icon="lock">Signin</Button>
        			<Button icon="user">Sign Up</Button>
        		</div>
			</Wrapper>
        );
    }
}

export default HeaderWrapper;