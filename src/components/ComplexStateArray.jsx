import React from "react"

export default function ComplexStateArray() {
  /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array as an empty array
     * 
     * Don't worry about fixing `addFavoriteThing` quite yet.
     */

const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
//   const myFavoriteThings = []


  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  // myFavoriteThings.push(allFavoriteThings); //local variable push example, we don't use push with state arrays because it mutates the existing array and does not create a new one
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    // we domn't use push with state arrays because it mutates the existing array an d does not create a new one
    //Here we use a call back function to get the latest state value because state updates are asynchronous and we need the most recent value to add the new item correctly
    setMyFavoriteThings(prevFavoriteThings => [...prevFavoriteThings, "Test"]); //spread operator here depicts the old array items and adds the new item "Test", "[]" here creates a new array
    
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}