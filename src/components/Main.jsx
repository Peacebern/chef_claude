//Initial Main.jsx before implementing dynamic rendering of ingridients with useState

// import React from 'react'
// import { useRef } from 'react';

// const Main = () => {
//   const inputRef = useRef(null);

//   // function handleClick() {
//   //   alert("this is working");
//   //   inputRef.current.focus(); //"inputRef.current.value" targets the current value of the element that is using useRef, while "inputRef.current.focus()" causes the cursor to focus on the input box
//   // }

//   const ingridients = ["oregano", "tomato", "basil", "chili flakes"];

//   const ingridientList = ingridients.map((ingridient, index) => (
//     <li key={index}>
//       {ingridient}
//     </li>
//   ))


//   function handleFormSubmit(event) {
//     event.preventDefault(); //prevents the default behaviour of the form which is to refresh the page when submitted
//     // alert("form submitted");

//     //Accessing the value of the input field using get("name") Note: "name" refers to the name attribute of the input field
//     const formData = new FormData(event.currentTarget); //event.currentTarget refers to the form element
//     const newIngredient = formData.get("ingridient"); //"ingridient" is the name attribute of the input field
//     ingridients.push(newIngredient);
//     console.log(ingridients); 
//   }

//   return (
//     <main className='main-cont'>
//       <form id="addIngridients" action="" onSubmit={handleFormSubmit} method="" className='addForm'>
//         <input
//           type="text"
//           aria-label='Add ingredients'
//           placeholder='e.g oregano'
//           name='ingridient'
//           ref={inputRef}
//         />
//         {/* <button onClick={handleClick}>Add ingridients</button> */}
//         <button type='submit'>Add ingridients</button>

//       </form>
//       <ul>
//         {ingridientList}
//       </ul>
//     </main>
//   )
// }

// export default Main



// Updated Main.jsx after figuring out how to use useState for dynamic rendering of ingridients
import React from 'react';
import { useRef } from 'react';
// import { useState } from 'react'; /// Not needed since we are using React.useState below if we import useState here we would have to change React.useState to just useState

export default function Main() {

  /**
   * Challenge: Update our app so that when the user enters a
   * new ingredient and submits the form, it adds that new
   * ingredient to our list!
   */

  const [ingredients, setIngredients] = React.useState([]); //initializing ingredients state as an empty array
  // const [ingredients, setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"]);



  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))



  function handleSubmit(event) {
    /**
     * Like before, don't worry about this FormData stuff yet.
     * Just use the newIngredient below to help you finish the
     * challenge.
     */
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    event.currentTarget.reset(); //This resets the form input field after submission by clearing its value

  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}