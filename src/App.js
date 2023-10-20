import React, { useState } from 'react';
import './App.css';
import { FaRegTrashAlt,FaUserAlt,FaCode } from 'react-icons/fa';
import { Toaster,toast } from 'react-hot-toast';


function App() {
  
  const [task, setTask] = useState("");
  const [add, setAdd] = useState(["Made my Saurav"]); 

  function clearAllHandler () {
    if(add !==""){
      setAdd([]);
      toast.success('Cleared Task list');
    }
  }

  function addHandler() {
    if(task !== ""){
      setAdd([...add, task]);
    setTask("");
    toast.success('Task Added!')
    }
    else {
      toast.error('Enter a Task First!')
    }
    
  }
  function removeHandler  () {
    const updatedAdd = [...add];
    updatedAdd.splice(task, 1);
    setAdd(updatedAdd)
    toast.success('Task Removed!')
  }

  return (
    <div className='flex justify-center  h-screen relative bg-white  dark:bg-[#484848]'>
      <div className='absolute '>
      <h1 className='md:text-7xl lg:text-7xl text-5xl font-bolder mt-2 mb-12 '>ToDo List</h1>
      <div className='flex justify-center'>
        <input
          placeholder='Add Task..'
          className='border-2 border-black rounded-lg mr-[10px] h-[50px] w-[250px] text-center active:w[300px]'
          value={task} 
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button onClick={addHandler} className='btn-donate'>Add</button>
      </div>
      <div className='flex justify-center'>
        <button className='btn-remove' onClick={clearAllHandler}>Clear All</button>
      </div>
      <div className='flex justify-center mt-[80px] pt-[40px] text-2xl capitalize '>
        
        <ul className='dark:text-white text-black'>
          {add.map((task, index) => (
            <li className='mb-4 flex justify-between' 
            key={index}><p className='mr-4'>{index+1} : {task} </p>
            <button className='btn-remove' onClick={removeHandler}><FaRegTrashAlt/></button></li>
          ))}
        </ul>
      </div>
      <div className='flex justify-center gap-4'>
        <a href="https://github.com/saurav-tiwari03/todo-list" rel="noreferrer" target='_blank' className='button-80'  ><FaCode/></a>
        <a href="https://my-portfolio-03.netlify.app/" rel="noreferrer" target='_blank' className='button-80'><FaUserAlt/></a>
      </div>
      <Toaster
        position='bottom-center'
        reverseOrder={true}/>
    </div>
    </div>
  );
}

export default App;


