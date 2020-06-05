import React, {useState} from 'react'

function CreateMessage(){

   const initialMsg = {name: '',text: ''};
  const [message,setMessage] = useState(initialMsg);

  const handleChange = (e)=>{

    setMessage({...message,[e.target.name]: e.target.value})
  }

  const submitMsg = (e) =>{
    e.preventDefault();
    setMessage({...message,message})
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
      <h2>Your name: {message.name}</h2>
      <h5>Your message: {message.text}</h5>
      <button onClick={submitMsg}>submit</button>

      <div className='displayMsg'>
        {
          
        }
      </div>


    </div>
  )
}

export default CreateMessage