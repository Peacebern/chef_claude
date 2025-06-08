import React from 'react'
import { useRef } from 'react';

const Main = () => {
  const inputRef = useRef(null);
  

  function handleClick() {
    // alert("this is working");
    inputRef.current.focus(); //"inputRef.current.value" targets the current value of the element that is using useRef, while "inputRef.current.focus()" causes the cursor to focus on the input box

  }

  return (
   <main className='main-cont'>
        <form id="addIngridients" action="" method="" className='addForm'>
            <input
                type="text"
                aria-label='Add ingredients' 
                placeholder='e.g oregano'
                ref={inputRef}
            />
            <button onClick={handleClick}>Add ingridients</button>
        </form>
   </main>
  )
}

export default Main