import React from 'react'
import DetailsPost from "./DetailsPost.jsx"
function Home({data}) {
  return (
    
    <div>
    <div>
      <input placeholder="Search"   />
      <button  >search </button>
    </div>
{ data.map((e,i)=>{
return(
    <DetailsPost  e={e} i={i} />

)})

}
</div>
  )
}

export default Home