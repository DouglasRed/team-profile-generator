const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

function BuildTeam() {
  this.manager;
  this.engineer;
  this.intern;
}
