const express = require("express");
const db =require('./database/index.js')
const path = require('path');
const app = express();
const port = 8000;
const cors =require ('cors');

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())

app.get("/store",(req,res)=>{
    res.send("welcom to my store")
  });  

// get all posts adn users
app.get("/store/getAll",(req,res)=>{
    const cb=(err,results)=>{
   if(err) res.status(500).send(err)
   else res.json(results)
  }
  db.getAll(cb)
  });

app.get("/store/getAllUser",(req,res)=>{
    const cb=(err,results)=>{
   if(err) res.status(500).send(err)
   else res.json(results)
   console.log("post deleted")
  }
  db.getAllUser(cb)
  })
//get one post for search
app.get("/store/getOne/:producName",(req,res)=>{
    
    const cb=(err,results)=>{
        if(err) res.status(409).send(err)
        else res.json(results)  
   console.log("search anything")
}
db.getOne(req.params.producName,cb)
})

// new post

app.post("/store/postNew",(req,res)=>{
    const post=req.body
    const cb=(err,results)=>{
        if(err) res.status(409).send(err)
 else res.status(201).json(results)
    }
    db.addNew(post,cb)
})

//post a new user 
app.post("/store/postNewUser",(req,res)=>{
    const post=req.body
    const cb=(err,results)=>{
        if(err) res.status(409).send(err)
 else res.status(201).json(results)
    }
    db.addNewUser(post,cb)
})

//delete one post 
app.delete("/store/deletePost/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const cb = (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(204).json(results);
    };
    db.deletePost(id, cb);
  });

//update one post 
app.put("/store/updatePost/:id",(req,res)=>{
    const id=req.params.id
    const cb=(err,results)=>{
      if(err) res.status(409).send(err)
    else res.status(200).json(results)
    }
    db.updatePost(id,req.body,cb)
    })


app.listen(port, () => {
    console.log(`Express app listening on port http://localhost:${port}`);
  });
  
  