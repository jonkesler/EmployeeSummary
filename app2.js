const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const newInputs =[];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Had the loop working in appTest but this is the only way I could figure to get it to save to an array.
// http://www.penandpaperprogrammer.com/blog/2018/12/16/repeating-questions-with-inquirerjs

const collectInputs = async (inputs = []) => {
    const prompts = [
    {
      type: "input",
      name: "name",
      message: "What is the Employee's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
      type: "rawlist",
      name: "role",
      message: "What is the employee's role?",
      choices: [Engineer, Intern, Manager],
    },
    {
        type: "input",
        name: "github",
        message: "What is the employee's GitHub username?", 
        when: (answers) => answers.role === "Engineer"
    },
    {
        type: "input",
        name: "school",
        message: "What school did the employee go to?", 
        when: (answers) => answers.role === "Intern"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?", 
        when: (answers) => answers.role === "Manager"
    },
    {
        type: "confirm",
        name: "again",
        message: "Would you like to add another employee?",
        default: true
      },
];

const { again, ...answers } = await inquirer.prompt(prompts);
// const employees = [...inputs, answers];
const newInputs = [...inputs, answers];
return again ? collectInputs(newInputs) : newInputs;
};

const main = async () => {
    const inputs = await collectInputs().catch((err) => {
      console.log(err);
  });
    console.log(inputs);
    console.log("_____________");
    console.log(this.name);
    console.log(this.id);
    console.log(this.role);
    console.log(newInputs);
    render();
}


main();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
