import React from 'react'

const Click = () => {

    // function handleClick() {
    //     console.log("this is me");
    // }

    function handleMouseOver() {
        console.log("you hovered on me");
        
    }

    return (
        <div>
            {/* <button onClick={function() {console.log("this is me")}}>Click me</button> */}
            {/* <button onClick={handleClick}>Click me</button> */} {/* Both ways of calling the function work the same the top one is inline jsx function while this one is external jsx functions*/}
            <button onMouseOver={handleMouseOver}>Click me</button>

        </div>
    )
}

export default Click