import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { SigninFormWrapper } from './css';

const FormItem = Form.Item;

class SigninPage extends Component {
	componentDidMount() {
		// 
	}

    render() {
        return (
            <SigninFormWrapper>
                <h1>SigninPage</h1>
                <Form className="login-form">
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </FormItem>
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </SigninFormWrapper>
        );
    }
}

export default SigninPage;
