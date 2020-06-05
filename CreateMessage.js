import React, {useState} from 'react'

function CreateMessage(){

   const initialMsg = {name: '',text: ''};
  const [message,setMessage] = useState(initialMsg);

  const handleChange = (e)=>{

    setMessage({...message,[e.target.name]: e.target.value})
  }

  const submitMsg = (e) =>{
    e.preventDefault();
    setMessage({...message,[e.target.name]: e.target.value})
    console.log(message);
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
        <h2>Name: {message.name}</h2>
        <p>Message: {message.text}</p>
      </div>


    </div>
  )
}

export default CreateMessage