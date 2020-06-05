import React, {useState} from 'react'

function HookCounter3(){
  const [name,setName] = useState({firstName: '',lastName: ''})

  return (
    <form>
      <input
        type='text'
        value={name.firstName}
        onChange={e => setName({...name,firstName: e.target.value})}
      />

      <input
        type='text'
        value={name.lastName}
        onChange={e => setName({...name,lastName: e.target.value})}
      />

      <h4>Your name is <b>{name.firstName} {name.lastName}</b></h4>
    </form>
  )
}

export default HookCounter3;