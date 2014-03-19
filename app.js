'use strict';

TodoApp = angular.module('Todo', []);

TodoApp.controller('TodoCtrl', function($scope) {
	$scope.todos = [];

	$scope.addTodo = function() {
		todos.push({
			"desc": $scope.newTodo,
			"done": false 
		});
	}

	$scope.do = function(index) {
		todos[index].done = true;
	}

	$scope.delete = function(index) {
		todos.splice(index, 1);
	}
});