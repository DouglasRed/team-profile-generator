const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, employeeId, email, university) {
    super(name, employeeId, email);

    this.university = university;
  }

  getUniversity() {
    return this.university;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
