import React, {useState} from 'react';

//using useState hook

function Counter(){
  const [count,setCount] = useState(0)

  return (
    <div>
      <h2>Hook_Count: {count} </h2>
      <button onClick={() => setCount(count+1)}>increase HookCount</button>
    </div>
  )
}

export default Counter;