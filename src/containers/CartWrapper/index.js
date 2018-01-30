import React, { Component } from 'react';
import { Affix, List, Avatar, Button, Input } from 'antd';

import { ORDERS } from './constants';
import { Wrapper } from './css';

class CartWrapper extends Component {
    render() {
        return (
            <Affix>
                <Wrapper>
                    <List
                        itemLayout="horizontal"
                        dataSource={ORDERS}
                        renderItem={item => (
                            <List.Item actions={[
                                <Button type="dashed" size="small" icon="plus" />,
                                <Input value="1" style={{ width : "50px" }}/>,
                                <Button type="dashed" size="small" icon="minus" />
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
