// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Inturn {
    constructor(name, id, email, school) {
      this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }

  }
  
  module.exports = Inturn;
