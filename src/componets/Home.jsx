import React,{useState} from 'react'
import DetailsPost from "./DetailsPost.jsx"
import "../App.css"
function Home({data,deleteShop ,updatePost,getone}) {
  const [producName, setProducName] = useState("");
  const handleSearch=()=>{
    getone(producName)
   }
  return (
<div className='container'>
    
    <div>
    <div>
      <input placeholder="Search" onChange={(e)=>setProducName(e.target.value)}  />
      <button onClick={handleSearch} >search </button>
    </div>
{ data.map((e,i)=>{
  return(
    <DetailsPost deleteShop={deleteShop} updatePost={updatePost} e={e} i={i} />
    
    )})
   
}
</div>
</div>
  )
}

export default Home