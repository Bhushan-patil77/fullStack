import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
  
    const data = {};
  
   formData.forEach((value, key)=>{
    data[key]=value
    
   })

   fetch('http://localhost:3000/users', {method:'post', headers:{'Content-Type':'application/json'},  body: JSON.stringify(data)})
   .then((response)=>{return response.json()})
   .then((data)=>{console.log(data)})
   .catch((error)=>{console.log(error)})

    
  };

  return (
    <>
     <div className='border border-black  w-full h-full'>
      <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
        <input type="text" name='name' placeholder='Enter Name...' />
        <input type="text" name='email' placeholder='Enter Email...' />
        <input type="text" name='password' placeholder='Enter Password...' />
        <button type='submit'>Submit</button>
      </form>
     </div>
    </>
  )
}

export default App
