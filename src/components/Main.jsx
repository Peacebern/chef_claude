import React from 'react'
import { useRef } from 'react';

const Main = () => {
  const inputRef = useRef(null);

  // function handleClick() {
  //   alert("this is working");
  //   inputRef.current.focus(); //"inputRef.current.value" targets the current value of the element that is using useRef, while "inputRef.current.focus()" causes the cursor to focus on the input box
  // }

  const ingridients = ["oregano", "tomato", "basil", "chili flakes"];

  const ingridientList = ingridients.map((ingridient, index) => (
    <li key={index}>
      {ingridient}
    </li>
  ))

  
  function handleFormSubmit(event) {
    event.preventDefault(); //prevents the default behaviour of the form which is to refresh the page when submitted
    // alert("form submitted");

    //Accessing the value of the input field using get("name") Note: "name" refers to the name attribute of the input field
    const formData = new FormData(event.currentTarget); //event.currentTarget refers to the form element
    const newIngredient = formData.get("ingridient"); //"ingridient" is the name attribute of the input field
    ingridients.push(newIngredient);
    console.log(ingridients); 
  }

  return (
    <main className='main-cont'>
      <form id="addIngridients" action="" onSubmit={handleFormSubmit} method="" className='addForm'>
        <input
          type="text"
          aria-label='Add ingredients'
          placeholder='e.g oregano'
          name='ingridient'
          ref={inputRef}
        />
        {/* <button onClick={handleClick}>Add ingridients</button> */}
        <button type='submit'>Add ingridients</button>

      </form>
      <ul>
        {ingridientList}
      </ul>
    </main>
  )
}

export default Main