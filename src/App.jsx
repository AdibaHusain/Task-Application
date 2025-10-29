import React from 'react'
import { useState } from 'react'
import TrueFocus from './TrueFocus';



const App = () => {


  //Two way binding ka use krke hum input field ko state se connect kr skte h
   const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [task, setTask] = useState([])


    const deleteTask = (idx) => {
      const copyTask = [...task]
      copyTask.splice(idx, 1)
      setTask(copyTask)
    }

  return (
    <div className=" h-screen lg:flex bg-black text-white">
      <form onSubmit={(e) =>{
        e.preventDefault();
        console.log("Submitted")
        const copyTask=[...task]
        copyTask.push({title,details})
        setTask(copyTask)
        setTitle("")
        setDetails("")
      }} 
      className='flex lg:w-1/2 gap-4 flex-col items-start p-10'>
      <h1 className='text-4xl font-bold'>
                <TrueFocus 
        sentence="Task Application"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
        />
      </h1>

      <input type='text' 
      placeholder='Enter Notes Heading' 
      className='px-5 w-full font-medium py-2 border-2 rounded' 
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}/>

        <textarea placeholder='Enter Details' 
        className='px-5 w-full h-32 py-2 border-2 flex items-start flex-row rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}></textarea>
        <button className=' bg-white active:bg-black active:scale-95 active:text-white w-full text-black px-5 py-2 rounded'>Add the details</button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function (elem,idx){

          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl py-9 px-4 text-black bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] ">
            <h3 className='text-xl leading-tight font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-semibold text-gray-600'>{elem.details}</p>
            <button onClick={()=>{
            deleteTask(idx)
          }} className='p-1.5 w-full cursor-pointer active:scale-95 bg-red-500 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
      </div>
      </div>
    </div>
  )
}

export default App
