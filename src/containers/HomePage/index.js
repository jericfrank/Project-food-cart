import React, { Component } from 'react';

import ItemWrapper from 'containers/ItemWrapper';
import HeaderWrapper from 'containers/HeaderWrapper';

class HomePage extends Component {
    render() {
        return (
        	<div>
	        	<HeaderWrapper />
	        	<ItemWrapper />
        	</div>
        );
    }
}

export default HomePage;
