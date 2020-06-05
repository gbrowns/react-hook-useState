import React, {useState} from 'react'

function CreateMessage(){

  const [message,setMessage] = useState({name: '',text: ''});

   const msglist = [];

  const handleChange = (e)=>{

    setMessage({...message,[e.target.name]: e.target.value})
  }

  const submitMsg = (e) =>{
    e.preventDefault();
    //msglist = [...message]
    msglist.push(message)
  }
  return (
    <div className='msgpane'>
      <input 
        type ='text' 
        name='name' 
        value={message.name} 
        onChange={handleChange}
      />

      <textarea 
        type ='text' 
        name='text' 
        value={message.text} 
        onChange={handleChange}>
      </textarea>

      <button onClick={submitMsg}>submit</button>

      <div className='displayMsg'>
        <ul>
          {
            msglist.map((msg, index)=> (
              <li key = {index}>{msg}</li>
            ))
          }
        </ul>
      </div>


    </div>
  )
}