import './App.css';
import Todos from './components/TodoItem';
import TodoForm from './components/TodoForm';
import { useState } from 'react'; // Import useState

function App() {
  // Initialize the state to manage the to-do list
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do
  const addTodo = (title) => {
    // Update the todos state with a new to-do item
    setTodos([...todos, { title }]);

  }
  console.log(todos);

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
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
