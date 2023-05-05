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
   console.log("all users")
  }
  db.getAllUser(cb)})

app.get("/store/comments",(req,res)=>{
  const cb=(err,results)=>{
    if(err) res.status(500).send(err)
    else res.json(results)
    console.log("all comments")
  }
  db.getAllComments(cb)
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
  const sql =`INSERT INTO posts(idposts,image, producName,category,price, contactNumber,quantity, users_idusers) VALUES("${req.body.idposts}","${req.body.image}","${req.body.producName}","${req.body.category}","${req.body.price}","${req.body.contactNumber}","${req.body.quantity}","${req.body.users_idusers}")`
  db.connection.query(sql, (err,result)=>{
    if(err) console.log(err)
    else res.send(result)
  })
})

//a new user 
app.post("/store/postNewUser",(req,res)=>{
    const post=req.body
    const cb=(err,results)=>{
        if(err) res.status(409).send(err)
 else res.status(201).json(results)
    }
    db.addNewUser(post,cb)
})
app.post("/store/comments",(req,res)=>{
  const comment=req.body
  const cb=(err,result)=>{
    if(err) res.status(409).send(err)
    else res.status(201).json(result)
  
  }
  db.addcomment(comment,cb)
})
//delete one post 
app.delete("/store/deletePost/:id", (req, res) => {
  const id = req.params.id;
  const cb = (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(`Deleted post with id ${id}`);
      res.status(204).send();
    }
  };
  db.deletePost(id, cb);
});
//update one post 
app.put("/store/updatePost/:id",(req,res)=>{
  console.log("updating")
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
  
  