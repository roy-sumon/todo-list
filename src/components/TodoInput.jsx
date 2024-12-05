import React, { useState } from 'react'
import TodoView from './TodoView';

const TodoInput = () => {
    const [input, setInput]= useState("");
    const [listItems, setListItems]= useState([]);
    console.log(listItems);
    
    const handleInputBtn = (e)=>{
        e.preventDefault();
        if (input.trim() === "") return;
        setListItems(prevItems => [...prevItems, input]);
        setInput('');    
    }
    const handleDelete = (index)=>{
        // let newListItems = [...listItems];
        // newListItems.splice(key, 1);
        // setListItems([...newListItems]);
        setListItems(prevItems => prevItems.filter((_, i) => i !== index));
    }

  return (
    <div>
        <form action="submit" className='flex gap-2'>
            <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" placeholder='write something' className='bg-white px-1 py-3 rounded-sm w-72 sm:w-[90%]' />
            <button onClick={handleInputBtn} className='bg-[#FFF5D7] px-3 rounded-sm uppercase font-semibold hover:bg-red-400 cursor-pointer sm:px-6 md:px-8'>Add</button>
        </form>
        {
            listItems.map((item, index)=>{
                return(
                    <TodoView item={item} handleDelete={() => handleDelete(index)} key={index} />
                )
            })
        }
    </div>
  )
}

export default TodoInput