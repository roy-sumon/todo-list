import React from 'react'

const TodoView = ({item, handleDelete}) => {
  return (
    <div className='bg-[#E195AB] my-3 rounded-sm flex justify-between items-center'>
        <h3 className='px-1 py-3 text-md'>{item}</h3>
        <span onClick={handleDelete} className='p-3 hover:text-red-600 text-xl font-semibold cursor-pointer'>X</span>
    </div>
  )
}

export default TodoView