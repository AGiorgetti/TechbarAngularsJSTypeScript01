namespace Techbar {

    /**
     * a controller for the todo list: we're going to use controllerAs syntax
     */
    class TodoListController {

        todos: ITodoItem[];

        static $inject = ["TodoListService"];
        constructor(
            private _todoListService: ITodoListService
        ) {
            this.todos = _todoListService.todos;
        }

        addTodo(task: string): void {
            this._todoListService.addTodo(task);
        }

        removeTodo(id: number): void {
            // ask for confirmation
            if (confirm("Do you really want to delete task: " + id + "?")) {
                this._todoListService.removeTodo(id);
            }

        }

    }

    angular.module("app")
        .controller("TodoListController", TodoListController);

}