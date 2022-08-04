const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const generateSite = require("../src/generate-site");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

function BuildTeam() {
  this.manager;
  this.engineer;
  this.intern;
}

BuildTeam.prototype.initializeTeam = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: (manageremail) => {
          if (manageremail) {
            return true;
          } else {
            console.log("Please enter the manager's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the team manager's employee ID number?",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter the manager's employeeID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter the manager's Office Number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Do you want to add another employee?",
        choices: ["Engineer", "Intern", "No more employees"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.addEmployee) {
        case "Engineer":
          engineerProfile();
          break;
        case "Intern":
          internProfile();
          break;
        default:
          // console.log("build team function");
          buildTeam();
      }
    });
};

const engineerProfile = () => {
  console.log(`
    ==============================
    Add a new Engineer to the team
    ==============================`);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the engineer's employee ID number?",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter the engineer's employeeID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is the engineer's GitHub username?",
        validate: (username) => {
          if (username) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username?");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.githubUsername
      );
      teamMembers.push(engineer);
      promptMenu();
    });
};

const internProfile = () => {
  console.log(`
    ==============================
    Add a new Intern to the team
    ==============================
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
        validate: (internName) => {
          if (internName) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the intern's employee ID number?",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("Please enter the intern's employeeID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "university",
        message: "What is the intern's university?",
        validate: (university) => {
          if (university) {
            return true;
          } else {
            console.log("Please enter the intern's university?");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.university
      );
      teamMembers.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {
  console.log(`
  ============================
  Now to put it all together!
  ============================
  `);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
};

module.exports = BuildTeam;
