import React, {useState} from 'react'

function NewCounter(){

  const [items,setItem] = useState([])

  return (
    <div>
        <input
          type='text'
          name='title'
          value={}
          onChange={handleChange}
        />
        <textarea 
          name="message"
          value={}
          onChange={handleChange}
        ></textarea>
        <button type='button' onClick={addMessage}>Save message</button>  
    </div>

  )
}


export default NewCounter;