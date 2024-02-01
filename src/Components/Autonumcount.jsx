import React, { useEffect, useState } from 'react'
import './common.css'

function Autonumcount() {

  const[count,setCount]=useState(0)
  
var auto;
  useEffect(()=>{
    const auto=setInterval(()=>{
      setCount(precount=>precount+1)
        },1000)
        return ()=>clearInterval(auto);
  })
function reset(){
  setCount(0)
}
const pause=()=>{
  setCount(count)
}





  return (
    <div className='head'>
      <h3>Automatic Number Counting</h3>
      <p><b>{count}</b></p>
      <button className='btn btn-success w-25 mb-3 mx-3' onClick={reset}>Reset</button>
      <button className='btn btn-success w-25 mb-3 mx-3' onClick={pause}>pause</button>
      
    </div>
  )
}

export default Autonumcount