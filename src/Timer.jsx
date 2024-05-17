import {useState, useEffect} from "react";

export default function Timer(){
  let [count, setCount] = useState(0);

useEffect(() => {
  let intervalid = setInterval(() => {
    setCount(count+ 1);
  },1000 );

  return () => {
    clearInterval(intervalid)
  }
  
})
  
  return(
    <>
    <h1>count: {count}</h1>
    </>
  )
}

//export default Timer;