class Todo {
    id: string;
    text: string;

    constructor(todoText: string){
        this.id = Math.floor(Math.random() * 100).toString();
        this.text = todoText;
    }
}

export default Todo;