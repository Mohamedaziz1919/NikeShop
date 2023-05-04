import React, { useState , useEffect} from 'react'
import Home from './componets/Home'
import axios from "axios"
import AddPost from './componets/AddPost'
function App() {
  const [data,setData]=useState([])
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
  return (
    <div>
     <AddPost/> 
    <Home data={data}/>
    </div>
  )
}

export default App