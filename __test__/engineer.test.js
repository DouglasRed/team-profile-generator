const Engineer = require("../lib/Engineer");

test("creates a manager card object", () => {
  const engineer = new Engineer(
    "Eugene the Engineer",
    50,
    "engineer@yahoo.com",
    "SrDevEugene"
  );

  expect(engineer.name).toBe("Eugene the Engineer");
  expect(engineer.employeeId).toEqual(expect.any(Number));
  expect(engineer.email).toBe("engineer@yahoo.com");
  expect(engineer.githubUserName).toBe("SrDevEugene");
});
