import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import HomePage from 'containers/HomePage';
import HeaderWrapper from 'containers/HeaderWrapper';
import ItemWrapper from 'containers/ItemWrapper';

describe('<HomePage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    it('renders <HeaderWrapper /> component', () => {
        expect( wrapper.find( HeaderWrapper ) ).toHaveLength( 1 );
    });

    it('renders <ItemWrapper /> component', () => {
        expect( wrapper.find( ItemWrapper ) ).toHaveLength( 1 );
    });
});