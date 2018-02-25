import _ from 'lodash';
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Divider, Alert } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { reduxForm, Fields } from 'redux-form';

import { SignInPageWrapper, SignInFormWrapper } from './css';
import { authSignin } from './actions';
import { selectSignInPageError } from './selectors';

const FormItem = Form.Item;

class SignInPage extends Component {
    constructor() {
        super();

        this.renderError = this.renderError.bind(this);
    }

	componentDidMount() {
		//
	}

    handleFormSubmit( { email, password } ) {
        this.props.authSignin( { email, password } );
    }

    renderFields( fields ) {
        const { email, password } = fields;

        return (
            <div>
                <FormItem>
                    <Input {...email.input} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                    {email.meta.touched && email.meta.error && <span className="error">{email.meta.error}</span>}
                </FormItem>
                <FormItem>
                    <Input {...password.input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" type="password"/>
                    {password.meta.touched && password.meta.error && <span className="error">{password.meta.error}</span>}
                </FormItem>
            </div>
        );
    }

    renderError() {
        const { errorMsg } = this.props;

        if ( errorMsg ) {
            return (
                <Alert message={`Error: ${errorMsg}`} type="error" style={{ marginTop: 10 }} showIcon={false} banner/>
            );
        }
    }

    render() {
        const { handleSubmit, fields } = this.props;

        return (
            <SignInPageWrapper>
                <SignInFormWrapper>
                    <Form onSubmit={handleSubmit( this.handleFormSubmit.bind(this) )} className="login-form">
                        <Fields names={fields} component={this.renderFields.bind(this)}/>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Sign in
                            </Button>
                            <Button className="login-form-button">
                                Create account
                            </Button>
                            {this.renderError()}
                            <Divider />
                            <Button icon="github" className="login-form-button">
                                Sign in with Github
                            </Button>
                            <Button icon="google" className="login-form-button">
                                Sign in with Google
                            </Button>
                        </FormItem>
                    </Form>
                </SignInFormWrapper>
            </SignInPageWrapper>
        );
    }
}

function validator({ email, password }) {
    const errors = {};

    if ( _.isEmpty(email) ) {
        errors.email = 'Email is required';
    }

    if ( _.isEmpty(password) ) {
        errors.password = 'Password is required';
    }

    return errors;
}

const mapStateToProps = createStructuredSelector( {
    errorMsg : selectSignInPageError()
} );

export function mapDispatchToProps ( dispatch ) {
    return {
        authSignin : ( payload ) => dispatch( authSignin( payload ) )
    };
}

SignInPage = reduxForm({
    form     : 'SignInPageForm',
    fields   : [ 'email', 'password' ],
    validate : validator
})(SignInPage);

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);