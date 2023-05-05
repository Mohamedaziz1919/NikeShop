import React,{useState} from 'react'
import "../App.css"
function Edit(props) {
    const [idposts, setIdposts] = useState(props.e.idposts);
    const [image, setImage] = useState(props.e.image);
    const [producName, setProducName] = useState(props.e.producName);
    const [category, setCategory] = useState(props.e.category);
    const [price, setPrice] = useState(props.e.price);
    const [contactNumber, setContactNumber] = useState(props.e.contactNumber);
    var shop={
        idposts:Math.floor(Math.random() * 1000000),
        image: image,
        producName:producName,
        category:category,
        price:price,
        contactNumber:contactNumber,
    }

    
    const handleUpdate = (id) => {
      
      props.updatePost(id, shop);
     
      // props.setShow(!props.show);
    };
  return (
    <div className='edit'>
         {props.showEdit?(
    <div>
         <>
         <input
           placeholder="image"
           value={image}
           onChange={(e) => setImage(e.target.value)}
         />
          <input
            placeholder="producName"
            value={producName}
            onChange={(e) => setProducName(e.target.value)}
          />
          <input
            placeholder="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
            <input
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          <input
            placeholder="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <button onClick={() => {handleUpdate(props.e.idposts,shop);window.location.reload(true);}} >Submit</button>
          </>
    </div>
          ):null}  
          </div>
  )
}

export default Edit