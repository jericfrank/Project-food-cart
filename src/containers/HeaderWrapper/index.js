import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        if ( key === 'signOut' ) {
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
                    <Menu.Item key="signOut">Sign Out</Menu.Item>
                </Menu>
            );

            return (
                <div>
                    <Category />
                    <Button icon="shopping-cart">Cart(2)</Button>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Avatar shape="square" src={providers[0].avatar}/>
                    </Dropdown>
                </div>
            );
        }
        
        return (
            <div>
                <Link to="/signin">
                    <Button icon="lock">Signin</Button>
                </Link>
                <Button icon="user">Sign Up</Button>
            </div>
        );
    }

    render() {
        return (
        	<Wrapper>
                <Link to="/">
        	       <h2 className="pull-left">Company Logo</h2>
                </Link>
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