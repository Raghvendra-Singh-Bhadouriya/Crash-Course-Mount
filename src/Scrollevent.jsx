import {useState, useEffect} from "react";

function ScrollEvent(){
  let [scrollPosition, setScrollPosition] = useState({y:0});

  useEffect(() => {
    function handleScroll(){
      setScrollPosition({y:window.scrollY})
    };

    window.addEventListener("scroll", handleScroll);

    return() => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])
  return(
    <>
    <p>Scroll Position: {scrollPosition.y}</p>
    <div style={{ height: "200vh"}}>
        Scroll down to see the effect
      </div>
    </>
  )
}

export default ScrollEvent;