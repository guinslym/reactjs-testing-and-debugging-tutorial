import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test("App snapchot test", () => {
	//create a component that hold our rendered app
	const component = renderer.create(<App />);
	//transform our component to JSON
	const tree = component.toJSON();
	// expect both to be the same
	expect(tree).toMatchSnapshot();
});