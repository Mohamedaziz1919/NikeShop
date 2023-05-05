const mysql =require("mysql2") 
const config = require("./config.js")
const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) console.log("Error to connect to database", err);
    else console.log(" Database connected ");
  });

// Your Database Queries Here!!
//get all posts and users queries :
const getAll=(cb)=>{
    const sql='SELECT * FROM `posts`'
    connection.query(sql,(err,res)=>{
      cb(err,res)
    })
  };
  const getAllUser=(cb)=>{
    const sql='SELECT * FROM `users`'
    connection.query(sql,(err,res)=>{
      cb(err,res)
    })
  };
  const getAllComments=(cb)=>{
    const sql='SELECT * FROM `comments`'
    connection.query(sql,(err,res)=>{
      cb(err,res)
    })
  }
// get one post for search
const getOne = (producName, cb) => {
  const sql = `SELECT * FROM posts WHERE producName="${producName}"`;
  connection.query(sql, (err, res) => {
    cb(err, res);
  });
};

// post queries of users and posts :
const addNew=(posts,cb)=>{
  const sql ="INSERT INTO `posts` SET ?"
  connection.query(sql, (err,result)=>{
    if (err) res.send(err);
    else res.send(result)
  })
};
const addNewUser=(posts,cb)=>{
  const sql ="INSERT INTO `users` SET ?"
  connection.query(sql,posts,(err,res)=>{
    cb(err,res)
  })
}
const addcomment=(comments,cb)=>{
  const sql="INSERT INTO `comments` SET ?"
  connection.query (sql,comments,(err,res)=>{
    cb(err,res)
  })
}
//delete post 
const deletePost=(id,cb)=>{
  const sql =`DELETE FROM posts WHERE idposts=${id}`
  connection.query(sql,(err,res)=>{
    cb(err,res)
  })};
//update post 

const updatePost=(id,posts,cb)=>{
const sql =`UPDATE posts SET ?  WHERE idposts=${id}`
connection.query(sql,posts,(err,res)=>{
  cb(err,res)
})
}



module.exports = {connection ,
  getAll,
  getOne,
  getAllUser,
  getAllComments,
  addNew,
  addNewUser,
  addcomment,
deletePost,
updatePost }