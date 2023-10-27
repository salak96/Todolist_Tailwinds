import './App.css';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
function App() {
    return (
        <>
            <div className='flex items-center justify-center w-full'>
                <div className='bg-blue-500 w-full p-4'>
                    <h1 className='text-4xl text-white flex items-center justify-center w-full'>To do list di React</h1>
                    <p className='text-gray-00 text-3xl font-bold mt-2 flex items-center justify-center w-full'>Belajar React.</p>
                </div>
            </div>
            <div className='flex-col items-center justify-center w-full'>
                <h1 className='mt-10 flex justify-center align-center text-3xl font-bold'>My to do List </h1>
                <TodoForm />
                <Todos />
            </div>
        </>
    );
}

export default App;
