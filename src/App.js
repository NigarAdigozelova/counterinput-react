import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [count,setCount]=useState(0)
  const [task,setTask]=useState([])

  
  function changeCount() {
      setCount(count+1)  
     }
  return (
    <div >
   <Counter count={count} />
   <Input changeCount={changeCount} task={task} setTask={setTask} setCount={setCount}/>
   <Output task={task}/>
    </div>
  );
}

export default App;
