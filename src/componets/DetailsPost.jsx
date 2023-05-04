import React from 'react'
import Edit from "./Edit.jsx"
function DetailsPost(props) {
  return (
    <div key={props.i}>
      <div>
              <img src={props.e.image} />
              <h1>{props.e.producName}</h1>
              <h2>{props.e.category}</h2>
              <h2>{props.e.price}</h2>
              <h3>{props.e.contactNumber}</h3>
              {/* <Edit e={props.e} /> */}
              <h3>{props.e.quantity}</h3>
            </div>
    </div>
  )
}

export default DetailsPost
