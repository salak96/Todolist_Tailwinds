import React from 'react';
import { useState } from 'react';

export default function TodoForm({ addTodo, todo }) {
    //definisi state title
    const [title, setTitle] = useState('');
    // Definisikan function handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title);
        setTitle('');
    };
    // Definisikan function "handleChangeTitle"
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    function AddTodo(todo) {
        addTodo(title);
        setTitle('');
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className='relative m-5'>
                    <input
                        type='Add'
                        id='default-Add'
                        className='w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Add your to do'
                        onChange={(e) => {
                            handleChangeTitle(e);
                        }}
                        value={title}
                    />
                    <button
                        type='submit'
                        className='absolute right-2 top-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1'
                        onClick={() => {
                            AddTodo();
                        }}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
