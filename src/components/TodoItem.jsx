// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Import the faPlus icon

export default function TodoItem({ todo, deleteTodo }) {
   
    return (
        <div className='flex flex-col items-center mt-1'>
            <div className='ml-auto '>
                <button onClick={() => deleteTodo(todo.id)}>
                    <FontAwesomeIcon icon={faXmark} style={{ color: '#ff0000' }} />
                </button>
                <br />
                <button>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
            </div>
        </div>
    );
}
