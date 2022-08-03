const Intern = require("../lib/Intern");
const intern = new Intern(
  "Isiah the Intern",
  404,
  "intern@edu.com",
  "Rice University"
);

test("creates an intern object card", () => {
  expect(intern.name).toBe("Isiah the Intern");
  expect(intern.employeeId).toEqual(expect.any(Number));
  expect(intern.email).toBe("intern@edu.com");
  expect(intern.university).toBe("Rice University");
});

test("test getName function to retrieve desired string value", () => {
  expect(intern.getName()).toBe("Isiah the Intern");
});

test("test getEmployeeId function to retrieve desired number value", () => {
  expect(intern.getEmployeeId()).toEqual(expect.any(Number));
});

test("test getEmail function to retrieve desired string value", () => {
  expect(intern.getEmail()).toBe("intern@edu.com");
});

test("test getSchool function to retrieve desired string value", () => {
  expect(intern.getUniversity()).toBe("Rice University");
});

test("test getRole function to retrieve desired value", () => {
  expect(intern.getRole()).toBe("Intern");
});
