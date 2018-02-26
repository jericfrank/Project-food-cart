import React from 'react';
import { Form, Input } from 'antd';

export default function( { input, label, icon, type, meta: { touched, error, warning } } ) {
	return (
	    <Form.Item>
            <Input {...input} prefix={icon} placeholder={label} type={type} />
            {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
        </Form.Item>
	);
}