import React, {useState} from 'react'

function CreateMessage(){

  const [message,setMessage] = useState({name: '',text: ''});
  return (
    <div className='msgpane'>
      <input type ='text' value=''/>
    </div>
  )
}