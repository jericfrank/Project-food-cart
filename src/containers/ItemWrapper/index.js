import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col, Pagination } from 'antd';

import Item from 'components/Item';

import { ITEMS } from './constants';
import { Wrapper, PaginateWrapper } from './css';

class ItemWrapper extends Component {
    renderItems ( value, key ) {
        return (
            <Col span={6} key={key}>
                <Item data={value}/>
            </Col>
        );
    }

    render () {
        return (
            <Wrapper>
                <Row gutter={8}>
                    { _.map( ITEMS, this.renderItems ) }
                </Row>
                <PaginateWrapper>
                    <Pagination defaultCurrent={1} total={100} />
                </PaginateWrapper>
            </Wrapper>
        );
    }
}

export default ItemWrapper;
