import React, {useState} from 'react'


function HookCounter2(){
  const initialCount = 0
  const [count,setCount] = useState(initialCount);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default HookCounter2;