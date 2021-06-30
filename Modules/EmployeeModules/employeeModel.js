const mongoose = require("mongoose")


const employeeSchema = new mongoose.Schema({
    employee_name: {
        type: String
    },
    employee_salary: {
        type: Number
    },
    employee_age: {
        type: Number
    },
    profile_image: {
        type: String
    },
    base_image: {
        type: String
    },
    position: {
        type: String
    },
    location: {
        type: String
    },
    department: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isAvailable: {
        type: Boolean
    },
},
{
    timestamp: true
}
)

const Model = mongoose.model("employees", employeeSchema)

module.exports = Model