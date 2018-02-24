import React, { Component } from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

const menu = (
	<Menu>
		<Menu.Item key="1">1st item</Menu.Item>
		<Menu.Item key="2">2nd item</Menu.Item>
		<Menu.Item key="3">3rd item</Menu.Item>
	</Menu>
);

class Category extends Component {
    render() {
        return (
        	<Dropdown overlay={menu}>
	            <Button>
	                Categories <Icon type="down" />
	            </Button>
	        </Dropdown>
        );
    }
}

export default Category;