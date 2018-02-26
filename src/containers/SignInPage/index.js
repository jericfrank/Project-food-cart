import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Button, Divider } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';

import InputField from 'components/Input';
import Alert from 'components/Alert';

import { mustRequired, mustEmail, warnEmail } from 'utils/validator';
import { SignInPageWrapper, SignInFormWrapper } from './css';
import { authSignin, authSocialUrl } from './actions';
import { selectSignInPageError } from './selectors';

const FormItem = Form.Item;

class SignInPage extends Component {
    constructor() {
        super();

        this.handleFormSubmit  = this.handleFormSubmit.bind(this);
        this.handleSocialLogin = this.handleSocialLogin.bind(this);
        this.renderButtons     = this.renderButtons.bind(this);
    }

	componentDidMount() {
		//
	}

    handleFormSubmit( form ) {
        const payload = {
            email    : form.get( 'email' ),
            password : form.get( 'password' )
        };
        
        this.props.authSignin( payload );
    }

    handleSocialLogin( e ) {
        this.props.authSocialUrl( e.target.name );
    }

    renderButtons() {
        return (
            <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign in
                </Button>
                <Link to="signup">
                    <Button className="login-form-button">
                        Create account
                    </Button>
                </Link>
                <Alert message={this.props.errorMsg} type="error"/>
                <Divider />
                <Button onClick={this.handleSocialLogin} name="github" icon="github" className="login-form-button">
                    Sign in with Github
                </Button>
                <Button onClick={this.handleSocialLogin} name="google" icon="google" className="login-form-button">
                    Sign in with Google
                </Button>
            </FormItem>
        );
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <SignInPageWrapper>
                <SignInFormWrapper>
                    <Form onSubmit={handleSubmit( this.handleFormSubmit )} className="login-form">
                        <Field
                            name="email"
                            type="text"
                            component={InputField}
                            label="Email"
                            icon={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            validate={[mustRequired, mustEmail]}
                            warn={warnEmail}
                        />
                        <Field
                            name="password"
                            type="password"
                            component={InputField}
                            label="Password"
                            icon={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            validate={[mustRequired]}
                        />
                        {this.renderButtons()}
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