const Manager = require("../lib/Manager");
const manager = new Manager("Doug", 34, "douglasred@yahoo.com", 5559056666);

test("creates a manager card object", () => {
  expect(manager.name).toBe("Doug");
  expect(manager.employeeId).toBe(34);
  expect(manager.email).toBe("douglasred@yahoo.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("test getName function to retrieve desired string value", () => {
  expect(manager.getName()).toBe("Doug");
});

test("test getEmployeeId function to retrieve desired string value", () => {
  expect(manager.getEmployeeId()).toEqual(expect.any(Number));
});

test("test getEmail function to retrieve desired string value", () => {
  expect(manager.getEmail()).toBe("douglasred@yahoo.com");
});

test("test getOfficeNumber function to retrieve desired number value", () => {
  expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("test getRole function to retrieve desired value", () => {
  expect(manager.getRole()).toBe("Manager");
});
