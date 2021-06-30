const EmployeeModel = require("./Modules/EmployeeModules/employeeModel")
const faker = require('faker');

module.exports = generateData = async() => {
    const employees = await EmployeeModel.find({})
    if(employees.length === 0){
        let arr =  await new Array(100).fill().map(() => {
            return {
              employee_name: `${faker.name.firstName()} ${faker.name.lastName()}`,
              employee_salary: faker.datatype.number(),
              employee_age: faker.datatype.number(),
              profile_image: faker.image.avatar(),
              base_image: faker.image.image(),
              position: faker.name.jobTitle(),
              location: faker.address.cityName(),
              department: faker.commerce.department(),
              email: faker.internet.email(),
              password: faker.internet.password(),
              isAvailable: faker.datatype.boolean(),
            };
          });
        await EmployeeModel.insertMany(arr)
    }else{
        console.log("Employees already added to DB")
    }
  };