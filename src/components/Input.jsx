import React, { useState } from 'react'

const Input = ({changeCount,task,setTask,setCount}) => {
    const [value,setValue]=useState("")
    const handleChange=(e)=>{
        setValue(e.target.value);
        changeCount();
    } 

    const handleSubmit=(e) =>{
        e.preventDefault();
        setTask([...task,value]);
        setValue("")
        setCount(0)
    
        
    }
  return (
    <div>
      <form action='' onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" onChange={(e)=>handleChange(e)} value={value}/>
        

      </form>
    </div>
  )
}

export default Input
