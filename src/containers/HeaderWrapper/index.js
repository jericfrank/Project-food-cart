import React, { Component } from 'react';
import { Avatar, Button, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { authSignout } from 'containers/SignInPage/actions';
import { selectSignInPageAuth, selectSignInPageUser } from 'containers/SignInPage/selectors';

import { Wrapper } from './css';
import Category from 'components/Category';

class HeaderWrapper extends Component {
    constructor() {
        super();

        this.renderButtons  = this.renderButtons.bind( this );
        this.handleNavigate = this.handleNavigate.bind( this );
    }

    handleNavigate( { key } ) {
        if ( key === 'siginOut' ) {
            this.props.authSignout();
        }
    }

    renderButtons() {
        const { authenticate, user } = this.props;

        if ( authenticate ) {
            const { providers } = user;

            const menu = (
                <Menu onClick={this.handleNavigate}>
                    <Menu.Item>Account</Menu.Item>
                    <Menu.Item key="siginOut">Logout</Menu.Item>
                </Menu>
            );

            return (
                <div>
                    <Category />
                    <Button icon="shopping-cart">Cart(2)</Button>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Avatar shape="square" src={`${process.env.REACT_APP_HOST}/${providers[0].avatar}`}/>
                    </Dropdown>
                </div>
            );
        }
        
        return (
            <div>
                <Button icon="lock">Signin</Button>
                <Button icon="user">Sign Up</Button>
            </div>
        );
    }

    render() {
        return (
        	<Wrapper>
        		<h2 className="pull-left">Company Logo</h2>
                <div className="pull-right">
                    { this.renderButtons() }
                </div>
                <div style={{ clear: 'both' }}></div>
			</Wrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector( {
    authenticate : selectSignInPageAuth(),
    user         : selectSignInPageUser()
} );

export function mapDispatchToProps ( dispatch ) {
    return {
        authSignout : () => dispatch( authSignout() )
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( HeaderWrapper );