const connection = require("../db");
const express = require("express");
require("dotenv").config();

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

  const getAllArticles  = (req, res) => {
          res.json(articles)
  };
 
  const createNewArticle  = (req, res) => {
    const Update=req.body;
    articles.push(Update);
     res.json(articles);
    };


  const changeArticleTitleById  = (req, res) => {
    articles[req.params.id].id =req.params.id;
    articles[req.params.id].title=req.params.newTitle;
    res.json(articles[req.params.id]);
    
    };
  const changeArticleAuthorById  = (req, res) => {
    
    articles[req.params.id].author =req.body.author;
    res.json(articles[req.params.id]);
    
    };


  const deleteArticleById  = (req, res) => {
    articles=articles.filter((ele)=>{
      return ele.id != req.params.id;
    })
    res.json(articles);
    
    };

  const deleteArticleByAuthor = (req, res) => {
    articles=articles.filter((ele)=>{
      return ele.author != req.body.author;
    })
    res.json(articles);
    
    };
   
    //MySql
   const  getAllArticlesMySql=(req,res)=>{
    const command = `SELECT * FROM articles WHERE is_deleted=0`;
    connection.query(command, (err, result) => {
      if (err) throw err;
      // console.log("RESULT: ", result);
      res.json(result);
    });
   }
   //title,description,author
   const createNewArticleMySql =(req,res)=>{
    const query = `INSERT INTO articles (title,description,author)
      VALUES (?,?,?)`;
    let {title,description,author}= req.body;
    const data = [title,description,author];
    connection.query(query, data, (err, result) => {
      if (err) throw err
      // console.log("RESULT: ", result);
      res.json(`successfully create articles`);
    });
   }

   
   const changeArticleTitleByIdMySql =(req,res)=>{
     const {id}=req.params;
     const {title}=req.params;
     
    const command =("UPDATE articles SET  title = ?  WHERE id = ?");
    const data =[title,id]
    connection.query(command,data, (err, result) => {
      if (err) throw err
      // console.log("RESULT: ", result);
      res.json(`successfully create articles`);
    });
   }
  
   const changeArticleAuthorByIdMySql =(req,res)=>{
     const id=req.params.id;
     const author=req.body.author;
     
    const command =(`UPDATE articles SET author = ? WHERE id = ?`);
    const data =[author,id]
    connection.query(command,data, (err, result) => {
      if (err) throw err
      res.json(result);
    });
   }
    
   const deleteArticleByIdMySql = (req,res)=>{
    const command = `DELETE FROM articles WHERE id=?`;
    const data = [req.params.id];
    connection.query(command,data, (err, result) => {
      if (err) throw err
       console.log("RESULT: ", result);
      res.json(result);
    });
   }
  
   const deleteArticleByAuthorMySql = (req,res) =>{
   
    const command = `DELETE FROM articles WHERE author=?`;
    const data = [req.body.author];
    connection.query(command,data, (err, result) => {
      if (err) throw err
       console.log("RESULT: ", result);
      res.json(result);
    });
   }
   


  module.exports={
    //Express
    getAllArticles,
    createNewArticle ,
    changeArticleTitleById,
    changeArticleAuthorById,
    deleteArticleById,
    deleteArticleByAuthor,
    //MySql
    getAllArticlesMySql,
    createNewArticleMySql,
    changeArticleTitleByIdMySql,
    changeArticleAuthorByIdMySql,
    deleteArticleByIdMySql,
    deleteArticleByAuthorMySql
  }