import data from '../../data/courses.json';


describe("Number test", () =>{
	// Number
	const numItems = data.length;

	test("Number of items = 12", () => {
		expect(numItems).toBe(12);
	});

	test("Number of items to be > 12", () => {
		expect(numItems).toBeGreaterThanOrEqual(12);
	});

});

describe("Strings Test", () => {
	// Strings
	const dataTest = data[0].title;


	test("There is a js in this title", () => {
		expect(dataTest).toMatch(/JS/);
	});

	test("The title contains React", () => {
		expect(dataTest).toContain("React");
	});
});

describe("Arrays Test", () =>{
	// Arrays
	const data2 = ["React Native", "MeteorJS"];

	test("the list of course mention React native and MeteorJS", () =>{
		expect(["React Native", "MeteorJS", "React"]).toEqual(expect.arrayContaining(data2));
	});
});


describe("Objects Tests", () => {
	// Objects

	test("the first course has a property of Title", () =>{
		expect(data[0]).toHaveProperty('title');
	});

	test("the first course has a property of Title", () =>{
		expect(data[0]).toHaveProperty('views', "31,266");
	});
});

