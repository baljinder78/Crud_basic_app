const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// Courses  - Id, Name, StartDate, EndDate, Teacher Id
const courses = mongoose.Schema({
  couseId: { type: String, required: true, dropDups: true, },
  name: { type: String, required: true, dropDups: true },
  start_date: { type: String, required: true, dropDups: true },
  end_date: { type: String, required: true, dropDups: true },
  teacherId: { type: String, required: true, dropDups: true },
});

courses.plugin(uniqueValidator);
module.exports = mongoose.model('courses', courses);
