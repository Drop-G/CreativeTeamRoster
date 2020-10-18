// TODO: Write code to define and export the Employee class
const inquirer = require(inquirer);

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

employee = inquirer.prompt([
{
    type: "input",
    message: "What is your name?",
    name:"name"
},{
    type: "input",
    message: "What is your email?",
    name:"email"
},{
    type:"input",
    message: "what is your role",
    name:"role"
}
])



module.exports = Employee;
