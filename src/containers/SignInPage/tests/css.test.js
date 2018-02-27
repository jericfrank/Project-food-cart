import React from 'react';
import { shallow } from 'enzyme';

import { SignInFormWrapper, SignInPageWrapper } from '../css';

const children = ( <h1>Test</h1> );
const SIFWrapperComponent = () => shallow(
	<SignInFormWrapper>
		{children}
	</SignInFormWrapper>
);

describe( '<SignInFormWrapper />', () => {
	it( 'should render an <div> tag', () => {
		const renderedComponent = SIFWrapperComponent();
		expect( renderedComponent.type() ).toEqual( 'div' );
	} );

	it( 'should render its children', () => {
		const renderedComponent = SIFWrapperComponent();
		expect( renderedComponent.contains( children ) ).toEqual( true );
	} );
} );

const SIWrapperComponent = () => shallow(
	<SignInPageWrapper>
		{children}
	</SignInPageWrapper>
);

describe( '<SignInPageWrapper />', () => {
	it( 'should render an <div> tag', () => {
		const renderedComponent = SIWrapperComponent();
		expect( renderedComponent.type() ).toEqual( 'div' );
	} );

	it( 'should render its children', () => {
		const renderedComponent = SIWrapperComponent();
		expect( renderedComponent.contains( children ) ).toEqual( true );
	} );
} );