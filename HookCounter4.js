import React, {useState} from 'react'


function HookCounter4(){
  const [items,setItems] = useState([]);


  return (
    <div>
      <button onClick={addItem}>Add number</button>
      <ul>
        {
          items.map(item => (<li key={item.id}>{item.value}</li>))
        }
      </ul>
    </div>
  )
}

export default HookCounter4;