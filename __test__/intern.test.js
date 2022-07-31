const Intern = require("../lib/Intern");

test("creates an intern object card", () => {
  const intern = new Intern(
    "Isiah the Intern",
    404,
    "intern@edu.com",
    "Rice University"
  );

  expect(intern.name).toBe("Isiah the Intern");
  expect(intern.employeeId).toEqual(expect.any(Number));
  expect(intern.email).toBe("intern@edu.com");
  expect(intern.university).toBe("Rice University");
});
