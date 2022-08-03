const Employee = require("../lib/Employee");
const employee = new Employee("Douglas", "101074", "douglasred63@yahoo.com");

test("creates an employee object", () => {
  expect(employee.name).toBe("Douglas");
  expect(employee.employeeID).toBe("101074");
  expect(employee.email).toBe("douglasred63@yahoo.com");
});

test("test getName function to retrieve desired string value", () => {
  expect(employee.getName()).toBe("Douglas");
});

test("test getEmployeeId function to retrieve desired string value", () => {
  expect(employee.getEmployeeId()).toBe("101074");
});

test("test getEmail function to retrieve desired string value", () => {
  expect(employee.getEmail()).toBe("douglasred63@yahoo.com");
});

test("test getRole function to retrieve desired value", () => {
  expect(employee.getRole()).toBe("Employee");
});
