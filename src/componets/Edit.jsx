import React,{useState} from 'react'

function Edit({e}) {
    // const [show, setShow] = useState(false);
    const [idposts, setIdposts] = useState(e.idposts);
    const [image, setImage] = useState(e.image);
    const [producName, setProducName] = useState(e.producName);
    const [category, setCategory] = useState(e.category);
    const [price, setPrice] = useState(e.price);
    const [contactNumber, setContactNumber] = useState(e.contactNumber);
    var shop={
        idposts:idposts,
        image: image,
        producName:producName,
        category:category,
        price:price,
        contactNumber:contactNumber,
    }
  return (
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
          <button >Submit</button>
        </>
    </div>
  )
}

export default Edit