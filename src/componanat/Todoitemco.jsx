/* eslint-disable react/prop-types */


const Todoitemco = ({ todo, index, edittodo, deletetodo }) => {
    return (
        <div>
            <li className='mb-2 flex items-center justify-between bg-white py-2 pl-2 rounded shadow-md ml-2'>
                <span className='font-bold'>
                    {todo.todo}
                </span>
                <div >
                    <button onClick={() => edittodo(index)} className='mr-2 p-1 bg-gradient-to-r from-gray-900 to-gray-400 text-white hover:from-gray-500 hover:to-gray-400 px-3 rounded'>edit</button>
                    <button onClick={() => deletetodo(todo.id)} className='mr-2 p-1 bg-gradient-to-r from-red-900 to-red-500 text-white hover:from-red-500 hover:to-red-400 px-3 rounded'>remove</button>
                </div>
            </li>
        </div>
    )
}

export default Todoitemco
