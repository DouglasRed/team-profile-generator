const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function BuildTeam() {
  this.manager;
  this.engineer;
  this.intern;
}

BuildTeam.prototype.initializeTeam = function () {
  inquirer
    .prompt([
      {
        type: "text",
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
      // .then(({ name }) => {
      //   this.manager = new Manager(name);
      //   console.log(Manager.name);
      // });
      {
        type: "text",
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
    ])
    .then(({ answers }) => {
      this.manager = new Manager(answers);
      console.log(Manager.answers);
    });
};

// },
// {
//   type: "text",
//   name: "EEID",
//   message: "What is the team manager's employee ID number?",
//   validate: (managerEEID) => {
//     if (managerEEID) {
//       return true;
//     } else {
//       console.log("Please enter the manager's employeeID!");
//       return false;
//     }
//   },
// },
// {
//   type: "text",
//   name: "managerEmail",
//   message: "What is the team manager's email?",
//   validate: (managerEmail) => {
//     if (managerEmail) {
//       return true;
//     } else {
//       console.log("Please enter the manager's email!");
//       return false;
//     }
//   },
// },
// {
//   type: "text",
//   name: "managerNumber",
//   message: "What is the team manager's office number?",
//   validate: (managerOfficeNumber) => {
//     if (managerOfficeNumber) {
//       return true;
//     } else {
//       console.log("Please enter the manager's OfficeNumber");
//       return false;
//     }
//   },
// },
// {
//   type: "list",
//   name: "addEmployee",
//   message: "Do you want to add another employee?",
//   choices: ["Engineer", "Employee", "No more employees"],
//   if (nameEmployee === "Engineer") {
//     inquirer.prompt(engineerQuestions)
//   } else if (addEmployee === "Intern"){
//     inquirer.prompt(internQuestions)
//   } else {
//     console.log("Create HTML document");
//   }
// }
// )};

// const engineerQuestions = [
//   {
//     type: "text",
//     name: "name",
//     message: "What is your engineer's name?",
//     validate: (engineerName) => {
//       if (engineerName) {
//         return true;
//       } else {
//         console.log("Please enter the engineer's name!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "EEID",
//     message: "What is the engineer's employee ID number?",
//     validate: (engineerEEID) => {
//       if (engineerEEID) {
//         return true;
//       } else {
//         console.log("Please enter the engineer's employeeID!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "engineerEmail",
//     message: "What is the engineer's email?",
//     validate: (engineerEmail) => {
//       if (engineerEmail) {
//         return true;
//       } else {
//         console.log("Please enter the engineer's email!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "engineerUsername",
//     message: "What is the engineer's GitHub username?",
//     validate: (username) => {
//       if (username) {
//         return true;
//       } else {
//         console.log("Please enter the engineer's GitHub username?");
//         return false;
//       }
//     },
//   },
//   {
//     type: "list",
//     name: "addEmployee",
//     message: "Do you want to add another employee?",
//     choices: ["Engineer", "Employee", "No more employees"],
//   },
// ];

// const internQuestions = [
//   {
//     type: "text",
//     name: "name",
//     message: "What is your intern's name?",
//     validate: (internName) => {
//       if (internName) {
//         return true;
//       } else {
//         console.log("Please enter the intern's name!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "EEID",
//     message: "What is the intern's employee ID number?",
//     validate: (internEEID) => {
//       if (internEEID) {
//         return true;
//       } else {
//         console.log("Please enter the intern's employeeID!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "internEmail",
//     message: "What is the intern's email?",
//     validate: (internEmail) => {
//       if (internEmail) {
//         return true;
//       } else {
//         console.log("Please enter the intern's email!");
//         return false;
//       }
//     },
//   },
//   {
//     type: "text",
//     name: "internSchool",
//     message: "What is the intern's university?",
//     validate: (university) => {
//       if (university) {
//         return true;
//       } else {
//         console.log("Please enter the intern's university?");
//         return false;
//       }
//     },
//   },
//   {
//     type: "list",
//     name: "addEmployee",
//     message: "Do you want to add another employee?",
//     choices: ["Engineer", "Intern", "No more employees"],
//   },
// ];

module.exports = BuildTeam;
