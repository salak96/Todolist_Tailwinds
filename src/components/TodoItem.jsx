import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the faPlus icon

export default function TodoItem({todo}) {
     const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Finish Progate React Course',
            completed: false,
        },
        {
            id: 2,
            title: 'Have lunch with Guru Domba',
            completed: false,
        },
        {
            id: 3,
            title: 'Study React with Ninja Ken',
            completed: false,
        },
    ]);

    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        console.log(updatedTodos);
    }

    return (
        <div className='flex flex-col items-center mt-1'>
            {todos.map((todo) => (
                <div key={todo.id} className='flex items-center mt-7 border-2 border-gray-400 p-5 rounded-lg w-3/4'>
                    <input type='checkbox' className='mr-2 m' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                    <h1 className={todo.completed ? 'line-through' : ''}>{todo.title}</h1>
                    <div className='ml-auto '>
                    <button onClick={()=> deleteTodo(todo.id)}><FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",}} />
                        </button>
                    <br />
                    <button>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
