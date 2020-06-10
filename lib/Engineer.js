// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer {
    constructor(name, id, email, gitHub) {
      this.github = gitHub;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }

  }
  
  module.exports = Engineer;
