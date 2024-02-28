"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (response) {
    var todos = response.data;
    var id = todos.id;
    var title = todos.title;
    var completed = todos.completed;
    logTodo(id, completed, title);
});
var logTodo = function (id, title, completed) {
    console.log("\n        The Todo with ID: ".concat(id, "\n        Has a title of: ").concat(title, "\n        Is it finished? ").concat(completed, "\n    "));
};
