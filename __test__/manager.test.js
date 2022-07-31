const Manager = require("../lib/Manager");

test("creates a manager card object", () => {
  const manager = new Manager("Doug", 34, "douglasred@yahoo.com", 5559056666);

  expect(manager.name).toBe("Doug");
  expect(manager.employeeId).toEqual(expect.any(Number));
  expect(manager.email).toBe("douglasred@yahoo.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
