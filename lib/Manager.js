// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager {
    constructor(name, id, email, officeNumber) {
      this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
        // return this.role
    }

  }
  
  module.exports = Manager;
