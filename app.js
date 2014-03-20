'use strict';

var TodoApp = angular.module('Todo', []);

TodoApp.controller('TodoCtrl', function($scope) {
	
	$scope.todos = [{
			"desc": "test",
			"done": false 
		}];


	$scope.isEmpty =false;	



	$scope.checkKey =function  (evt) {
		
		if (evt.keyCode ==13){
			$scope.addTodo();
		}else{

			if ($scope.isEmpty)	$scope.removeTooltip();
		}
	}	

	$scope.addTodo = function() {

		if($scope.newTodo){
			$scope.todos.push({
			"desc": $scope.newTodo,
			"done": false 
		});
		$scope.newTodo='';


		}else{
			$scope.isEmpty =true;
			setTimeout($scope.removeTooltip,500);

		}


	}

	$scope.removeTooltip = function(){
				$scope.isEmpty =false;
				console.log("remove");	
			}


	$scope.removeDone=function(){

		$scope.todos = _.filter($scope.todos,function (el) {
			return !el.done 
		});

	}

	$scope.do = function(index) {
		$scope.todos[index].done = !$scope.todos[index].done;
	}

	$scope.delete = function(index) {
		$scope.todos.splice(index, 1);
	}
	
});



