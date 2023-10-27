export default function TodoForm() {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <form>
                <div className='relative mt-5'>
                    <input
                        type='Add'
                        id='default-Add'
                        className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Add your to do'
                        required
                    />
                    <button
                        type='submit'
                        className='text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover-bg-red-700 dark:focus-ring-blue-800'
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
