/** @format */

const EmployeeModel = require('./employeeModel');

exports.getEmployee = async (req, res) => {
  try {
    const { sortBy } = req.query;
    let query = {};
    if (sortBy === 'department') {
      query = { department: 1 };
    } else if (sortBy === 'location') {
      query = { location: 1 };
    } else if (sortBy === 'position') {
      query = { position: 1 };
    } else {
      query = {};
    }
    const employees = await EmployeeModel.find({}).sort(query);

    if (!employees) {
      return res.send('Error fetching Employees');
    }

    return res.json(employees);
  } catch (error) {
    return res.send(error);
  }
};
