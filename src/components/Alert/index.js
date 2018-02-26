import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

class AlertComponent extends Component {
    render() {
        const { message, type } = this.props;

        return ( message ) ? <Alert message={message} type={type} style={{ marginTop: 10 }} showIcon={false} banner/> : '';
    }
}

AlertComponent.propTypes = {
    message : PropTypes.string.isRequired,
    type    : PropTypes.string.isRequired
};

export default AlertComponent;