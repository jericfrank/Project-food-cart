import _ from 'lodash';
import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { reduxForm, Fields } from 'redux-form'

import { SignInFormWrapper } from './css';

const FormItem = Form.Item;

class SignInPage extends Component {
	componentDidMount() {
		// 
	}

    handleFormSubmit( fields ) {
        console.log( fields );
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
            <SignInFormWrapper>
                <h1>SignInPage</h1>
                <Form onSubmit={handleSubmit( this.handleFormSubmit.bind(this) )} className="login-form">
                    <Fields names={fields} component={this.renderFields.bind(this)}/>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign in
                        </Button>
                    </FormItem>
                </Form>
            </SignInFormWrapper>
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
