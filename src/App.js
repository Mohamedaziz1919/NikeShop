import React, { useState , useEffect} from 'react'
import Home from './componets/Home'
import "./App.css"
import axios from "axios"
import AddPost from './componets/AddPost'
function App() {
  const [data,setData]=useState([])
  // const [producName, setProducName] = useState("");
  function fetchData(){
    axios.get("http://localhost:8000/store/getAll")
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{console.log(err)})
  }
  useEffect(()=>{
    fetchData()
  },[])
   
  function addShop(shop) {
    console.log("addshop tekhdem", shop)
    axios.post("http://localhost:8000/store/postNew", shop)
      .then((res) => {
        console.log("my data from front", res.data)
      })
      .catch((err) => {
        console.log(err.message);
        //alert("Could not add shop. Please try again later.");
      });
  }
  //delete your shop by idposts 
  function deleteShop(id){
    console.log(id)
    if(window.confirm("are you sure that u want to delete it")){
    axios.delete(`http://localhost:8000/store/deletePost/${id}`)
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{console.log(err)})
  }
  }
  //update post by idposts 
  function updatePost(id,shop){
    axios.put(`http://localhost:8000/store/updatePost/${id}`,shop)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{console.log(err)})
  }

  //search any artical what do you want 
  function getone(producName){
    axios.get(`http://localhost:8000/store/getOne/${producName}`)
   .then((res)=>{
    setData(res.data)
   })
   .catch((err)=>{console.log(err)})
  }

  //add comments 
  function addComment(comment){
    axios.post("http://localhost:8000/store/comments",comment)
    .then((res) => {
      console.log("my data from front", res.data)
    })
    .catch((err) => {
      console.log(err.message);
      alert("thank you for comment");
    });
}

  return (
    <div>
      {/* <input placeholder="Search" onChange={(e)=>setProducName(e.target.value)} className='searchbar' />
      <button onClick={getone} >Search </button> */}
     <AddPost AddShop={addShop}/> 
    <Home data={data} deleteShop={deleteShop} updatePost={updatePost} getone={getone} addComment={addComment}/>
    </div>
  )
}

export default App