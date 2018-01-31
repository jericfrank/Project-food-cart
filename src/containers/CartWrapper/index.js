import React, { Component } from 'react';
import { Affix, List, Avatar, Button, InputNumber } from 'antd';

import { ORDERS } from './constants';
import { Wrapper } from './css';

class CartWrapper extends Component {
    render() {
        return (
            <Affix>
                <Wrapper>
                    <List
                        size="small"
                        itemLayout="horizontal"
                        dataSource={ORDERS}
                        renderItem={item => (
                            <List.Item actions={[
                                <p>&#8369; 60 x</p>,
                                <InputNumber min="1" max="10000"/>,
                                <p>&#8369; 500</p>
                            ]}>
                                <List.Item.Meta
                                    avatar={<Avatar src="/example.jpg" />}
                                    title={item.title}
                                />
                            </List.Item>
                        )}
                    />
                    <div style={{ padding : '15px 0 0 0' }}>
                        <Button type="default" style={{ width : '49%' }}>Checkout</Button>
                        <Button type="default" style={{ width : '49%', float : 'right' }}>Cancel</Button>
                    </div>
                </Wrapper>
            </Affix>
        );
    }
}

export default CartWrapper;
