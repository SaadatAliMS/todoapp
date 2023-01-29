'use client';
import React, { useState } from 'react'

export default function CounterApp() {
    const [counter,setCounter]= useState(0)
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
  return (

  <> <button onClick={increment}>Increment</button>
  {counter}
  <button onClick={decrement}>Decrement</button> </>
  )
  
}
