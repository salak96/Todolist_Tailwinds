import './App.css';
import Todos from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { useState } from 'react'; // Import useState
import TodoItem from './components/TodoItem';

function App() {
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
    const addTodo = (title) => {
        // Update the todos state with a new to-do item
        if (title === '') {
            return;
        }
        const newTodo = {
            id: todos.length + 1,
            title: title,
            completed: false,
        };
        const updatedTodos = todos.concat(newTodo);
        setTodos(updatedTodos);
    };
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
        // console.log(updatedTodos);
    };
    return (
        <>
            <div className='flex items-center justify-center w-full'>
                <div className='bg-blue-500 w-full p-4'>
                    <h1 className='text-4xl text-white flex items-center justify-center w-full'>To do list di React</h1>
                    <p className='text-gray-00 text-3xl font-bold mt-2 flex items-center justify-center w-full'>Belajar React.</p>
                </div>
            </div>
            <div className='flex-col items-center justify-center w-full'>
                <h1 className='mt-10 flex justify-center align-center text-3xl font-bold'>My to-do List</h1>
                <TodoForm addTodo={addTodo} todo={todos} />
                {todos.map((todo) => (
                    <div key={todo.id} className='m-auto flex items-center mt-7 border-2 justify-center border-gray-400 p-5 rounded-lg w-2/4'>
                        <input type='checkbox' className='mr-2 m' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        <h1 className={todo.completed ? 'line-through' : ''}>{todo.title}</h1>
                        <div className='ml-auto'>
                            <TodoItem todo={todo} deleteTodo={deleteTodo} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
