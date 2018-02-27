import _ from 'lodash';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Icon, Button, Divider } from 'antd';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';

import InputField from 'components/Input';
import Alert from 'components/Alert';

import { SignInPageWrapper, SignInFormWrapper } from './css';
import { authSignin, authSocialUrl } from './actions';
import { selectSignInPageError, selectSignInPageAuth } from './selectors';
import { FIELDS } from './constants';

const FormItem = Form.Item;

export class SignInPage extends Component {
    constructor() {
        super();

        this.renderButtons     = this.renderButtons.bind(this);
    }

	componentDidMount() {
		//
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
                <Button onClick={this.props.onAuthSocialUrl} name="github" icon="github" className="login-form-button">
                    Sign in with Github
                </Button>
                <Button onClick={this.props.onAuthSocialUrl} name="google" icon="google" className="login-form-button">
                    Sign in with Google
                </Button>
            </FormItem>
        );
    }

    renderField( { name, type, label, validate, warn, icon }, index ) {
        return (
            <Field
                key={index}
                name={name}
                type={type}
                component={InputField}
                label={label}
                icon={<Icon type={icon} />}
                validate={validate}
                warn={warn}
            />
        );
    }

    render() {
        const { handleSubmit } = this.props;

        if ( this.props.authenticate ) {
            return (
                <Redirect to="/home"/>
            );
        }

        return (
            <SignInPageWrapper>
                <SignInFormWrapper>
                    <Form onSubmit={handleSubmit( this.props.onAuthSignin )} className="login-form">
                        { _.map( FIELDS, this.renderField ) }
                        {this.renderButtons()}
                    </Form>
                </SignInFormWrapper>
            </SignInPageWrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector( {
    errorMsg     : selectSignInPageError(),
    authenticate : selectSignInPageAuth()
} );

export function mapDispatchToProps ( dispatch ) {
    return {
        onAuthSignin    : ( payload ) => dispatch( authSignin( payload.toJS() ) ),
        onAuthSocialUrl : ( e ) => dispatch( authSocialUrl( e.target.name ) )
    };
}

SignInPage = reduxForm({
    form: 'SignInPageForm'
})(SignInPage);

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);