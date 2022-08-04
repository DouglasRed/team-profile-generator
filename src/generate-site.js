const generateTeam = (team) => {
  console.log(team, "line 2");

  const html = [];

  const generateManager = (manager) => {
    console.log(manager);
    let managerHtml = `
    <div class= "card" style="width: 180px;">
      <div class="card-header">
      ${manager.name} </br>
      <i class="fas" fa-mug-hot"></i>Manager</div>
      <ul class="list-group-flush">
      <li class="list-group-item">ID:${manager.employeeId}</li>
      <li class="list-group-item">Email:<span id="email"><a href="mailto:${manager.email}">${manager.email}</li>
      <li class="list-group-item">Office Number:${manager.officeNumber}</li>
      <ul>
      </div>
    `;
    html.push(managerHtml);
  };
  const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerHtml = `
    <div class= "card" style="width: 180px;">
    <div class="card-header"engineer.name} </br>
    <i class="fas" fa-mug-hot"></i>Manager</div>
    <ul class="list-group-flush">
    <li class="list-group-item">ID:${engineer.employeeId}</li>
    <li class="list-group-item">Email:<span id="email"><a href="mailto:${engineer.email}">${engineer.email}</li>
    <li class="list-group-item">Github Profile:<a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
    <ul>
    </div>
  `;
    html.push(engineerHtml);
  };
  const generateIntern = (intern) => {
    console.log(intern);
    internHtml = `
    <div class= "card" style="width: 180px;">
    <div class="card-header"engineer.name} </br>
    <i class="fas" fa-mug-hot"></i>Manager</div>
    <ul class="list-group-flush">
    <li class="list-group-item">ID:${intern.employeeId}</li>
    <li class="list-group-item">Email:<span id="email"><a href="mailto:${intern.email}">${intern.email}</li>
    <li class="list-group-item">School:${intern.university}</li>
    <ul>
    </div>
  `;
    html.push(internHtml);
  };

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }
  return html.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  <link rel="stylesheet" href="../assets/css/style.css"/>
  <title>Profile Generator</title>
</head>
<body>
  <header>
    <h1>My Team </h1>
  </header>

  <main> ${generateTeam(team)}</main>
</body>
</html>
  `;
};
