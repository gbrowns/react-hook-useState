import React, {useState} from 'react'

function NewCounter(){

  const [items,setItem] = useState([{title: '',message: ''}])

  const addMessage = (e) =>{
    setItem([...items,{
      id: items.length,
      [e.target.name]: e.target.value
    }])
  }

  /*const handleChange = (e) =>{
    [e.]
  }*/
  return (
    <div>
        <input
          type='text'
          name='title'
          value={items[0].title}
          onChange={handleChange}
        />
        <textarea 
          name="message"
          value={items[0].message}
          onChange={handleChange}
        ></textarea>
        <button type='button' onClick={addMessage}>Save message</button>  
    </div>

    <div className='display-text'>
      <ul>
        {
          items.map(item => (<li key={item.id}>{item.message}</li>  ))
        }
      </ul>
    
    </div>

  )
}


export default NewCounter;