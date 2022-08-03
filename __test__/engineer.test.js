const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "Eugene the Engineer",
  50,
  "engineer@yahoo.com",
  "DouglasRed"
);

test("creates a manager card object", () => {
  expect(engineer.name).toBe("Eugene the Engineer");
  expect(engineer.employeeId).toEqual(expect.any(Number));
  expect(engineer.email).toBe("engineer@yahoo.com");
  expect(engineer.githubUsername).toBe("DouglasRed");
});

test("test getName function to retrieve desired string value", () => {
  expect(engineer.getName()).toBe("Eugene the Engineer");
});

test("test getEmployeeId function to retrieve desired number value", () => {
  expect(engineer.getEmployeeId()).toEqual(expect.any(Number));
});

test("test getEmail function to retrieve desired string value", () => {
  expect(engineer.getEmail()).toBe("engineer@yahoo.com");
});

test("test getSchool function to retrieve desired string value", () => {
  expect(engineer.getGithubUsername()).toBe("DouglasRed");
});

test("test getRole function to retrieve desired value", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
