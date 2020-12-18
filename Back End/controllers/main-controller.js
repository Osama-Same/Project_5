const connection = require("../db");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const request = require('request')


let articles = [
    {
    id: 1,
    title: 'eat fried chicken',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'jouza',
    },
    {
    id: 4,
    title: 'how to studey react',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'abd',
    },
    {
    id: 7,
    title: 'how to vote',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    author: 'jouza',
    },
    ];

  const getAllArticlesExpress  = (req, res) => {
          res.json(articles)
  };
 
  const createNewArticleExpress  = (req, res) => {
    const Update=req.body;
    articles.push(Update);
     res.json(articles);
    };


  const changeArticleTitleByIdExpress  = (req, res) => {
    articles[req.params.id].id =req.params.id;
    articles[req.params.id].title=req.params.newTitle;
    res.json(articles[req.params.id]);
    
    };
  const changeArticleAuthorByIdExpress  = (req, res) => {
    
    articles[req.params.id].author =req.body.author;
    res.json(articles[req.params.id]);
    
    };


  const deleteArticleByIdExpress  = (req, res) => {
    articles=articles.filter((ele)=>{
      return ele.id != req.params.id;
    })
    res.json(articles);
    
    };

  const deleteArticleByAuthorExpress = (req, res) => {
    articles=articles.filter((ele)=>{
      return ele.author != req.body.author;
    })
    res.json(articles);
    
    };
   
    //MySql
    const getAllArticlesMySql = (req, res) => {
      const sqlCommand = `SELECT * FROM articles WHERE is_deleted = 0`;
      connection.query(sqlCommand, (err, result) => {
      if (err) throw err;
      res.json(result);
      });
      };
   //title,description,author
   const createNewArticleMySql = (req, res) => {
    const sqlCommand = `INSERT INTO articles (title,img_url, description, author) VALUES (?,?,?,?)`;
    const data = [req.body.title, req.body.img_url, req.body.description, req.body.author];
    connection.query(sqlCommand, data, (err, result, field) => {
    if (err) throw err;
    res.json('Success create new article');
    });
    };

   
    const changeArticleTitleByIdMySql = (req, res) => {
      const sqlCommand = `UPDATE articles SET title = ? WHERE id = ?`;;
      const data = [req.params.newTitle, req.params.id];
      connection.query(sqlCommand, data, (err, result, field) => {
      if (err) throw err;
      res.json('Success change article title ');
      });
      };
  
      const changeArticleAuthorByIdMySql = (req, res) => {
        const sqlCommand = `UPDATE articles SET author = ? WHERE id = ?`;
        let data = [req.body.author, req.params.id];
        connection.query(sqlCommand, data, (err, result, field) => {
          if (err) throw err;
          res.json('Success change article author name');
        });
      };
    
        const deleteArticleByIdMySql = (req, res) => {
          const sqlCommand = `UPDATE articles SET is_deleted = ? WHERE id = ?`;
          const data = [1,req.params.id];
          connection.query(sqlCommand, data, (err, result, field) => {
            if (err) throw err;
            res.json('Success delete article by id');
          });
        };
  
  
       const deleteArticleByAuthorMySql = (req,res) =>{
       const command = `DELETE FROM articles WHERE author=?`;
       const data = [1,req.body.author];
       connection.query(command,data, (err, result) => {
       if (err) throw err
       console.log("RESULT: ", result);
       res.json(result);
    });
   }
    //register
  
   const CreateNewUser = async (req, res) => {
    const query = `INSERT INTO users (email, password, name, age) VALUES (?,?,?,?)`;
    let { email, password, name , age } = req.body;
    password = bcrypt.hashSync(password, Number("salt"));
    const data = [email, password, name, age];
    connection.query(query, data, (err, result) => {
      res.json({ status: "User registerd" });
      if (err) throw err;
      // console.log("data", data);
    });
  };
   const Login = (req,res)=>{
    const query = `Select * From users WHERE email=?;`;
    const{email,password}=req.body;
    const data =[email,password];
    connection.query(query,data,async (err, result)=>{
      if(err) throw err;
      if(result.length){
        if(await bcrypt.compare(password,result[0].password)){
          const{user_id,email,password,name,age}=result[0]
          const payload ={user_id,email:email,password:password,name:name,age:age}
          const options={expiresIn: process.env.TOKEN_EXPIRATION}
          token =jwt.sign(payload,process.env.SECRET,options)
          res.json("Success login");
        }else {
          res.json({ error: "Password is wrong" });
        }
      }else{
          res.json({ error: "Email is wrong" });
      }
    })

   } 
   //searchData 
   
   const searchData = (req, res) => {
    
    const sqlCommand = `SELECT * FROM articles WHERE title='${req.body.title}'`;
    
    connection.query(sqlCommand, (err, result) => {
    if (err) throw err;
    res.json(result);
    });
    };
   const contact = (req, res) => {
    
    const sqlCommand = `SELECT users.user_id,users.email,users.name,articles.id,articles.title  
                        FROM users   
                        INNER JOIN articles  
                        ON users.user_id = articles.id`;
    
    connection.query(sqlCommand, (err, result) => {
    if (err) throw err;
    res.json(result);
    });
    };
    const weatherdata =(req,res)=>{
      const Ap ="http://api.openweathermap.org/data/2.5/weather?q=Amman&appid=ba98c702f84ca0cecab68d61c6f73c3f"
      request(Ap,(error,response,body)=>{
        console.log(error)
        console.log(response)
        res.send(body)
      })
    }
    const DataArticles = (req, res) => {
      const sqlCommand = `SELECT * FROM articles WHERE id=${req.params.id}`;
      connection.query(sqlCommand,(err, result) => {
      if (err) throw err;
      res.json(result);
      });
      };
  module.exports={
    //Express
    getAllArticlesExpress,
    createNewArticleExpress ,
    changeArticleTitleByIdExpress,
    changeArticleAuthorByIdExpress,
    deleteArticleByIdExpress,
    deleteArticleByAuthorExpress,
    //MySql
    getAllArticlesMySql,
    createNewArticleMySql,
    changeArticleTitleByIdMySql,
    changeArticleAuthorByIdMySql,
    deleteArticleByIdMySql,
    deleteArticleByAuthorMySql,
    
    //register
    CreateNewUser,
    Login,

     //searchData
    searchData,
    weatherdata,
    contact,
    DataArticles
  }