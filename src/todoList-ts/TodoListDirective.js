// Version 1 : define the directive using a function
	
function TodoListDirectiveFactory() {
	return {
		restrict: "AE",
		templateUrl: "todoList-ts/todoListDirectiveTemplate.html",
		controller: "TodoListController",
		controllerAs: "vm"
	}
}

angular.module("app")
	.directive("todoListDirective", TodoListDirectiveFactory);
	
// Version 2 : with isolated scope as controllerAs (bindToController: true)
	
function TodoListDirectiveFactory2() {
	return {
		templateUrl: "todoList-ts/todoListDirectiveTemplate.html",
		controller: "TodoListController",
		controllerAs: "vm",
		// add an isolated scope!
		scope: {
			test: "="
		},
		bindToController: true // <- don't forget this! or you'll need to inject the $scope to access anything passed 
		// to the direcrun ttive from the outside (using arguments and binding) 
		// adding bindToController you just need to define new properties on the controller itself and that's it
		// you can verify it injcting the $scope and look: you have a copy of the property on the scope
		// and one on the controller and they both are out of sync!
	}
}

angular.module("app")
	.directive("todoListDirectiveIsoScope", TodoListDirectiveFactory2);