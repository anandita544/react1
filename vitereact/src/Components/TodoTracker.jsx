import { useRef, useState } from "react"
function TodoTracker() {
    const [todos, setTodos] = useState(["a", "b"]);
    const myRef = useRef("this is a string");
    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target)
        const newTodo = fd.get("todo-input")
        console.log("added");
        // const newTodos = todos.slice();
        const newTodos = [...todos, newTodo]
        // newTodos.push(newTodo);
        setTodos(newTodos);


    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input name="todo-input" placeholder="Add Todo" />
            <button>ADD</button>
        </form>
        <p>{myRef.current}</p>
        <ul>
            {
                todos.map(todo => <li>{todo}</li>)
            }
        </ul>
    </div>
}
export default TodoTracker;