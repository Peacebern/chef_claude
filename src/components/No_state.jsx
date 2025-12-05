// import React from 'react'

// const No_state = () => {
//   const state = "YES!";
//   // state = "NO!" //This will throw an error because state is immutable without using useState hook
//   function handleClick() {
//     state = "NO!" //This will also throw an error because state is immutable without using useState hook
//   }
//   return (
//     <main style={{backgroundColor: 'brown', color: 'white', height: '100vh'}}>
//       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//         <h1>Is State important to know</h1>
//         <button onClick={handleClick}  style={{backgroundColor: 'white', color: 'black', borderRadius: '100%', padding: '10px'}}>{state}</button>
//       </div>
//     </main>
//   )
// }

// export default No_state


//The above code is commented out because it will throw an error when the button is clicked since we are trying to change a variable directly without using state management.
//The correct way to manage state in React is to use the useState hook as shown below:
// import React, { useState } from 'react'

// const No_state = () => {
//   const [state, setState] = useState("YES!"); //useState hook returns an array with two elements, the first element is the current state value and the second element is a function to update the state value       
//   function handleClick() {
//     setState("NO!") //Using the setState function to update the state value
//   }
//   return (
//     <main style={{backgroundColor: 'brown', color: 'white', height: '100vh'}}>
//       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//         <h1>Is State important to know</h1>
//         <button onClick={handleClick}  style={{backgroundColor: 'white', color: 'black', borderRadius: '100%', padding: '10px'}}>{state}</button>
//       </div>
//     </main>
//   )
// }

// export default No_state


//showing the indepth version of useState hook as a React function in itself
// import React from 'react'

// const No_state = () => {
//   let [result, setResult] = React.useState("Hello it's me"); //useState hook returns an array with two elements, the first element is the current state value and the second element is a function to update the state value
//   // console.log(result);
//   // setResult = "nope"; //This will throw an error because we are trying to reassign the setResult function

//   function handleClick() {
//     setResult("You clicked me!"); //Using the setResult function to update the state value
//   }
  
  
//   return (
//     <main style={{ backgroundColor: 'brown', color: 'white', height: '100vh' }}>
//       <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//         <h1>Is State important to know</h1>
//         <button onClick={handleClick}   style={{ backgroundColor: 'white', color: 'black', borderRadius: '100%', padding: '10px' }}>{result}</button>
//       </div>
//     </main>

//   );
// }

// export default No_state


//showing the indepth version of useState hook as a custom function that shows how useState can be custom implemented
import React from 'react'

const No_state = () => {

  let [count, setCount] = React.useState(0); //useState hook returns an array with two elements, the first element is the current state value and the second element is a function to update the state value
  

  function handleClickPlus() {
    setCount(count + 1); //Using the setCount function to update the state value , note: do not use count++ or count += 1 as it will not work correctly, it will just reassign the value of count variable but not update the state
  }


  function handleClickMinus() { 
    setCount(count - 1); //Using the setCount function to update the state value
  }

  //Functional updates to state if we deal with react prevValues, this is useful when the new state value depends on the previous state value
  // function handleClickPlus() {
  //   setCount(prevCount => prevCount + 1); //Using the setCount function to update the state value based on previous state value
  // }

  // function handleClickMinus() {
  //   setCount(prevCount => prevCount - 1); //Using the setCount function to update the state value based on previous state value
  // }
  
  
  return (
    <main style={{ backgroundColor: 'brown', color: 'white', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>How many times did peace say state in this session</h1>
        <button    style={{ backgroundColor: 'white', color: 'black', borderRadius: '100%', padding: '10px' }}>{count}</button>
      </div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={handleClickMinus} style={{ backgroundColor: 'grey', color: 'white', borderRadius: '100%', padding: '5px' }}>-</button>
        <button onClick={handleClickPlus} style={{ backgroundColor: 'grey', color: 'white', borderRadius: '100%', padding: '5px' }}>+</button>
      </div>
    </main>

  );
}

export default No_state