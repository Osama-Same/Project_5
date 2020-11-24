

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
    articles.author
    res.json(articles);
       
  }
   
    

    


  module.exports={
    getAllArticles,
    createNewArticle ,
    changeArticleTitleById,
    changeArticleAuthorById,
    deleteArticleById,
    deleteArticleByAuthor
  }