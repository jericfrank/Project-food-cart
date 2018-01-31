import React, { Component } from 'react';
import { Affix, List, Avatar, InputNumber, Icon, Divider } from 'antd';

import { ORDERS } from './constants';
import { Wrapper, Total, CheckoutWrapper, CheckoutButton } from './css';

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
                                <p>&#8369; 60.00 x</p>,
                                <InputNumber defaultValue={1} min={1} max={10000}/>,
                                <p>&#8369; 30.00</p>
                            ]}>
                                <List.Item.Meta
                                    avatar={<Avatar src="/example.jpg" />}
                                    title={item.title}
                                />
                            </List.Item>
                        )}
                    />
                    <Total>
                        &#8369; <span>1,500.00</span>
                    </Total>
                    <Divider/>
                    <CheckoutWrapper>
                        <CheckoutButton type="primary">
                            <Icon type="shopping-cart" /> Checkout
                        </CheckoutButton>
                        <CheckoutButton type="default" position="right">Cancel</CheckoutButton>
                    </CheckoutWrapper>
                </Wrapper>
            </Affix>
        );
    }
}

export default CartWrapper;
