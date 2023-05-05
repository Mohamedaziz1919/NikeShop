import React, { useState } from 'react'
import Edit from "./Edit.jsx"
import "../App.css"

function DetailsPost(props) {
  const [show,setShow]=useState(false)
  const [showEdit, setShowEdit] = useState(false)
  
  const handleShow = () => {
    setShow(!show);
    
  };
 

  const handleDelete=(id)=>{
    props.deleteShop(id)
}

  return (


    <div key={props.i} className="card">
      <div>
        <div className='card-content'>
              <button className="btn1" onClick={handleShow}>°°°</button>
             {show?(
              <> <p>{props.e.FullName}</p>
              <button className="btn2" onClick={() => setShowEdit(!showEdit)}>EDIT </button>
              <button className="btn2" onClick={() => {handleDelete(props.e.idposts); window.location.reload(true);}}>DELETE</button>
             </>
             ):null}
              
              </div>
             
              <img src={props.e.image} alt="Product Image"/>
              <div className="card-body">
              <h1 className="card-title">{props.e.producName}</h1>
              <h2 className="card-category">{props.e.category}</h2>
              <h2 className="card-price">{props.e.price}</h2>
              <h3  className="card-contact" >{props.e.contactNumber}</h3>
              {/* <h3  className="card-contact" >{props.e.contactNumber}</h3> */}
              <h3 className="card-quantity">{props.e.quantity}</h3>
              </div>
            </div>
            <Edit e={props.e}  updatePost={props.updatePost} showEdit={showEdit}/>
    </div>
   
  )
}

export default DetailsPost
