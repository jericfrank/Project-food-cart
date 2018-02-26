import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Divider, Alert } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';

import { mustRequired, mustEmail, warnEmail } from 'utils/validator';
import { SignInPageWrapper, SignInFormWrapper } from './css';
import { authSignin, authSocialUrl } from './actions';
import { selectSignInPageError } from './selectors';

const FormItem = Form.Item;

class SignInPage extends Component {
    constructor() {
        super();

        this.renderError       = this.renderError.bind(this);
        this.handleSocialLogin = this.handleSocialLogin.bind(this);
    }

	componentDidMount() {
		//
	}

    handleFormSubmit( { email, password } ) {
        this.props.authSignin( { email, password } );
    }

    handleSocialLogin( e ) {
        this.props.authSocialUrl( e.target.name );
    }

    renderField( { input, label, icon, type, meta: { touched, error, warning } } ) {
        return (
            <FormItem>
                <Input {...input} prefix={icon} placeholder={label} type={type} />
                {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
            </FormItem>
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
        const { handleSubmit } = this.props;

        return (
            <SignInPageWrapper>
                <SignInFormWrapper>
                    <Form onSubmit={handleSubmit( this.handleFormSubmit.bind(this) )} className="login-form">
                        <Field
                            name="email"
                            type="text"
                            component={this.renderField}
                            label="Email"
                            icon={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            validate={[mustRequired, mustEmail]}
                            warn={warnEmail}
                        />
                        <Field
                            name="password"
                            type="password"
                            component={this.renderField}
                            label="Password"
                            icon={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            validate={[mustRequired]}
                        />
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Sign in
                            </Button>
                            <Link to="signup">
                                <Button className="login-form-button">
                                    Create account
                                </Button>
                            </Link>
                            {this.renderError()}
                            <Divider />
                            <Button onClick={this.handleSocialLogin} name="github" icon="github" className="login-form-button">
                                Sign in with Github
                            </Button>
                            <Button onClick={this.handleSocialLogin} name="google" icon="google" className="login-form-button">
                                Sign in with Google
                            </Button>
                        </FormItem>
                    </Form>
                </SignInFormWrapper>
            </SignInPageWrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector( {
    errorMsg : selectSignInPageError()
} );

export function mapDispatchToProps ( dispatch ) {
    return {
        authSignin    : ( payload ) => dispatch( authSignin( payload ) ),
        authSocialUrl : ( payload ) => dispatch( authSocialUrl( payload ) )
    };
}

SignInPage = reduxForm({
    form: 'SignInPageForm'
})(SignInPage);

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);