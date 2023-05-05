import React from 'react'
import { useHistory } from "react-router-dom";

function BeginnerPage() {
    const history = useHistory();
  
    function handleClick() {
      history.push("/");
    }
  
    return (
      <div>
        <h1>Welcome to the Beginner Page!</h1>
        <button onClick={handleClick}>Go to Home</button>
      </div>
    );
  }
export default BeginnerPage