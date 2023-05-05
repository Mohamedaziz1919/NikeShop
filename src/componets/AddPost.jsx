import React, { useState } from 'react'

function AddPost({ AddShop }) {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [producName, setProducName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleShow = () => {
    setShow(!show);
  }
   
  const handleAdd = () => {
    const post = {
      idposts: Math.floor(Math.random() * 1000000),
      image,
      producName,
      category,
      price,
      contactNumber,
      quantity,
      users_idusers: 2
    };
    console.log("from post",post);
    AddShop(post);
  }

  return (
    <>
      <button onClick={handleShow}>Add New Post</button>
      {show && (
        <div>
          <>
            <input placeholder='image' onChange={(e) => setImage(e.target.value)} />
            <input placeholder='producName' onChange={(e) => setProducName(e.target.value)} />
            <input placeholder='category' onChange={(e) => setCategory(e.target.value)} />
            <input placeholder='price' onChange={(e) => setPrice(e.target.value)} />
            <input placeholder='contactNumber' onChange={(e) => setContactNumber(e.target.value)} />
            <input placeholder='quantity' onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={() => {handleAdd(); window.location.reload(true)}}>Add Shop</button>
          </>
        </div>
      )}
    </>
  )
}

export default AddPost;
