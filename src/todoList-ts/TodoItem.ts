/**
 * an object that represents a task to complete
 * 
 * what if this object is coming from an external service and it 
 * goes out of sync due to some changes server side?
 */

namespace Techbar {

    /**
     * the interface of an object returned by the remote service
     */
    export interface ITodoItem {
        id: number;
        task: string;
        completed: boolean;
    }

    /**
     * an actual ToDo item implementation if we need it
     */
    class TodoItem implements ITodoItem {
        id: number;
        task: string;
        completed: boolean;
    }

}