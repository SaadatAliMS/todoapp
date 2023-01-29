"use client";

import { useState } from "react";

export default function StringPractise() {
  const [val,setval] = useState("hello 1")      // "useState" is example of Hook,It is used to control a value dynamically
  const [val2,setval2]=useState("hello 2")       // another hook used for 2nd input
  // const val= "Write your todos";
  const onChangeHandler=(e:any)=>{
    console.log('e is:',e.target.value);
    setval(e.target.value);

  };
  const onChangeHandler2=(e:any)=>{
    console.log('e is:',e.target.value);
    setval2(e.target.value)
  };
  return (
  <>
  <input type={"text"} value={val} onChange={onChangeHandler} /> 
  <br /> 
  <input type={"text"} value={val2} onChange={onChangeHandler2} />
  <br />
 length of string1:{val.length};
  <br /> 
  length of string2:{val2.length};
  </>   
  )
  // <> </> are known as React Fragments
  // onChange are client side events,must write "use client" at top of page
  // on line 24 & 26 Javascript length propert used {} used for dynamically controlling value
    
};

