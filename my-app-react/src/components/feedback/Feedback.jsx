import React from "react"
import { useState } from "react"
import Counter from "../counter/Counter"

const name = "Thaisa"
let Feedback = ()=>{
    const[newFedback, setNewFeedback] = useState({
        rating:5,
        isPositive: true,
        numOfFeedback: 10
    })
    const updateFeedBackFunc = ()=>{
        setNewFeedback({
        rating:10,
        isPositive: false,
        numOfFeedback: 12
        })
    }
    return (
        <>
        <p><strong>This is a Feedback Section</strong></p>
        <div>
            <p>The Project Supervisor is {name}</p>
            <p>Rating: {newFedback.rating}</p>
            <p>PositiveResponse: {newFedback.isPositive}</p>
            <p>NumOfFeedback: {newFedback.numOfFeedback}</p>
            <button onClick={updateFeedBackFunc}>Update Feedback</button>

            <Counter />
        </div>
  
        </>
    )
}
export default Feedback

//create a counter component - number dislayed on the screen;
//a button, onclick of the button, add one to the counter