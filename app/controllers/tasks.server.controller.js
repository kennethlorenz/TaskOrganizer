// Load the 'Task' Mongoose model
var Task = require("mongoose").model("Task");

// Create a new 'createTask' controller method
exports.createTask = function (req, res, next) {
  // Create a new instance of the 'Task' Mongoose model
  var task = new Task(req.body);
  // Use the 'Task' instance's 'save' method to save a new task document
  task.save(function (err) {
    if (err) {
      // Call the next middleware with an error message
      return next(err);
    } else {
      // Use the 'response' object to send a JSON response
      res.json(task);
    }
  });
};
