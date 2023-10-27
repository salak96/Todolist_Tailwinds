import TodoItem from './TodoItem';

export default function Todos({ todo, togleTodo, deleteTodo }) {
    return (
        <div className='flex items-center justify-center w-full'>
            {todo.map((item) => (
                <TodoItem key={item.id} todo={item} togleTodo={togleTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}
