import React from 'react'

const Output = ({task}) => {
  return (
    <div>
      {task.map((t,index)=>(
        <li key={index}>{t}</li>
      ))}
    </div>
  )
}

export default Output
