import _ from 'lodash';
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Divider } from 'antd';
import { reduxForm, Fields } from 'redux-form'

import { postRequest } from 'utils/request';
import { SignInPageWrapper, SignInFormWrapper } from './css';

const FormItem = Form.Item;

class SignInPage extends Component {
	componentDidMount() {
		// 
	}

    handleFormSubmit( { email, password } ) {
        postRequest('login', { email, password })
            .then( res => console.log( res ) )
            .catch( err => console.log( err ) );
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

SignInPage = reduxForm({
    form     : 'SignInPageForm',
    fields   : [ 'email', 'password' ],
    validate : validator
})(SignInPage);

export default SignInPage;
