import data from '../../data/courses.json';

// Number
const numItems = data.length;

test("Number of items = 12", () => {
	expect(numItems).toBe(12);
});

test("Number of items to be > 12", () => {
	expect(numItems).toBeGreaterThanOrEqual(12);
});

// Strings
const dataTest = data[0].title;


test("There is a js in this title", () => {
	expect(dataTest).toMatch(/JS/);
});

test("The title contains React", () => {
	expect(dataTest).toContain("React");
});

// Arrays
const data2 = ["React Native", "MeteorJS"];

test("the list of course mention React native and MeteorJS", () =>{
	expect(["React Native", "MeteorJS", "React"]).toEqual(expect.arrayContaining(data2));
});