import React from 'react';
import renderer from 'react-test-renderer';
import Single from './Single';


describe("Single Snapshot", () =>{
	test("Single snapchot test", () => {
		//create a component that hold our rendered app
		const component = renderer.create(<Single />);
		//transform our component to JSON
		const tree = component.toJSON();
		// expect both to be the same
		expect(tree).toMatchSnapshot();
	});
});