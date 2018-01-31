import React, { Component } from 'react';
import { Row, Col } from 'antd';

import ItemWrapper from 'containers/ItemWrapper';
import CartWrapper from 'containers/CartWrapper'

class HomePage extends Component {
    render() {
        return (
            <Row gutter={8}>
                <Col span={18}>
                    <ItemWrapper />
                </Col>
                <Col span={6}>
                    <CartWrapper />
                </Col>
            </Row>
        );
    }
}

export default HomePage;
