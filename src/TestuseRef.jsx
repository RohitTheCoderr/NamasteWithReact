import React from 'react'
import { useRef } from 'react'
function TestuseRef() {
    const myref=useRef(0)
   const mybb= ()=>{
      console.log(myref.current);
      
   }
  return (
    <div className='bg-orange-400 my-3'>
        <input ref={myref} type="text" />
        <button onClick={mybb} className='h-12 p-4 text-green-950 border-red-600'>submit</button>
    </div>
  )
}

export default TestuseRef