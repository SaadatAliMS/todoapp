'use client';
import React, { useState } from 'react'

export default function CounterAppAdvance() {
    const [counter,setCounter]= useState(0)
    const increment=(delta=1)=>{
        setCounter(counter+delta)
    }
    const decrement=(delta=1)=>{
        setCounter(counter-delta)
    }
  return (
 <> 
 <button onClick={()=>{increment(1)}}>Increment by 1</button>
 <button onClick={()=>{decrement(1)}}>Decrement by 1</button> 
 <button onClick={()=>{increment(2)}}>Increment by 2</button>
 <button onClick={()=>{decrement(2)}}>Decrement by 2</button>
 {counter}
 <button onClick={()=>{increment(3)}}>Increment by 3</button>
 <button onClick={()=>{decrement(3)}}>Decrement by 3</button>
<button onClick={()=>{increment(4)}}>Increment by 4</button>
<button onClick={()=>{decrement(4)}}>Decrement by 4</button>

   
  </>
  )
  
}
