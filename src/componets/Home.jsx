import React,{useState} from 'react'
import DetailsPost from "./DetailsPost.jsx"
import "../App.css"
function Home({data,deleteShop ,updatePost,getone,addComment}) {
  const [producName, setProducName] = useState("");
  const handleSearch=()=>{
    getone(producName)
   }
  //  const handlecomment=()=>{
  
  //   addComment()
  //  }
  return (
<div className='container'>
    
    <div >
    <div className='searchbar'>
      <nav className='nav'>
      <div className='logo'>
      <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F67979fc2-9bc6-4ef1-a91a-9f8129c57645_1500x1500.jpeg' alt='Logo' />
     <h4 className='h4'>NikeShop</h4>
    </div>
      <input placeholder="Search" onChange={(e)=>setProducName(e.target.value)} className='searchbar' />
      <button onClick={handleSearch} >Search </button>
    
      </nav>
    </div>
{ data.map((e,i)=>{
  return(
    <DetailsPost deleteShop={deleteShop} updatePost={updatePost} e={e} i={i} />
    
    )})
   
}
</div>
<h3 className='h3'>You want to add an comment ?</h3>
<nav className='nav'>
  <textarea placeholder='Add your comments ' className='comm'></textarea>
  <button className='btn5'> Send </button>
  <h3 className='h4'>All comments </h3>
</nav>
</div>
  )
}

export default Home