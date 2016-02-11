namespace Techbar {
    
    /**
     * interface of the component that will handle the communication with the remote service
     */
    export interface ITodoListService {
        todos: ITodoItem[];
        addTodo(task: string): void;
        removeTodo(id: number): void;
    }

    class TodoListService implements ITodoListService {

        todos: ITodoItem[] = [];

        static $inject = ["$http"];
        constructor(
            private $http: ng.IHttpService
        ) {
            $http.get<ITodoItem[]>("/api/list").then((todos) => {
                // do not change the instance! can be dangerous depending on how we do the bindings
                /*for (var i = 0; i < todos.data.length; i++) {
                    var itm = todos.data[i];
                    this.todos.push(itm);
                }*/
                for (let itm of todos.data) {
                    this.todos.push(itm);
                }
            });
        }

        addTodo(task: string): void {
            this.$http.post<ITodoItem>("/api/list", { "task": task }).then((newTodoItem) => {
                // update the local copy
                this.todos.push(newTodoItem.data);
            });
        }

        removeTodo(id: number): void {
            this.$http.delete<ITodoItem>("/api/list/" + id).then((deletedItem) => {
                // update the local list
                for (let i = 0; i < this.todos.length; i++) {
                    if (this.todos[i].id === deletedItem.data.id) {
                        this.todos.splice(i, 1);
                        return;
                    }
                }
            });
        }
    }

    angular.module("app").service("TodoListService", TodoListService);

}
