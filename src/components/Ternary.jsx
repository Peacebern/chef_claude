// import React from 'react'

// const Ternary = () => {

//     /**
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */
//     const isGoingOut = true; //so depending on the value of isGoingOut variable we will show different text on the button, i.e if "true" then "Yes" else "No"

//     let answer = isGoingOut  ? "Yes" : "No"; // 👈 Use ternary here

//     // Remove the code below 👇 once your ternary is done
//     // if (isGoingOut === true) {
//     //     answer = "Yes"
//     // } else {
//     //     answer = "No"
//     // }

//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{answer}</button>
//         </main>
//     )

// }

// export default Ternary 


//Scenerio where we move the ternary directly into the JSX
// import React from 'react'

// const Ternary = () => {

//     /**
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */
//     const isGoingOut = true; //so depending on the value of isGoingOut variable we will show different text on the button, i.e if "true" then "Yes" else "No"


//     // Remove the code below 👇 once your ternary is done
//     // if (isGoingOut === true) {
//     //     answer = "Yes"
//     // } else {
//     //     answer = "No"
//     // }

//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{isGoingOut ? "Yes" : "No"}</button>
//         </main>
//     )

// }

// export default Ternary 


//Scenerio where we move the ternary directly into the JSX with state management
import React, { useState } from 'react'

export default function Ternary () {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = useState(true);

    function handleClick() { 
        setIsGoingOut(prevState => !prevState); //flipping the boolean value
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onClick={handleClick} className="value">{isGoingOut ? "Yes" : "No" }</button>

        </main>
    )
}
