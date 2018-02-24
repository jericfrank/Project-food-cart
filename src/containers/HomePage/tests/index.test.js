import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import HomePage from 'containers/HomePage';
import HeaderWrapper from 'containers/HeaderWrapper';
import ItemWrapper from 'containers/ItemWrapper';

describe('<HomePage />' , () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(<HomePage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    describe('renders children', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<HomePage />);
        });

        it('<HeaderWrapper />', () => {
            expect( wrapper.find( HeaderWrapper ) ).toHaveLength( 1 );
        });

        it('<ItemWrapper />', () => {
            expect( wrapper.find( ItemWrapper ) ).toHaveLength( 1 );
        });
    });
});
    