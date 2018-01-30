import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon } from 'antd';

import { CardWrapper } from './css';

class Item extends Component {
    render() {
        const { name, picture, description } = this.props.data;

        return (
            <CardWrapper>
                <Card
                    hoverable={true}
                    style={{ width: '100%' }}
                    cover={<img alt={name} src={picture} />}
                    actions={
                        [
                            <Button type="dashed">
                                <Icon type="plus" /> add order
                            </Button>
                        ]
                    }
                >
                    <Card.Meta
                        title={name}
                        description={description}
                    />
                </Card>
            </CardWrapper>
        );
    }
}

Item.propTypes = {
    data : PropTypes.object.isRequired
};

export default Item;
