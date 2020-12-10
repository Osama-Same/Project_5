import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  // [nameOfTheState,functionToChangeTheState] = (initalValue)
  const [articles, setArticles] = useState([]);
  const [id, SetID] = useState(0);
  const [Title, setNewTitle] = useState("");
  const [description, setNewDesc] = useState("");
  const [Author, setNewAuthor] = useState("");
  useEffect(() => {
    console.log("========= USEEFFECT CALLED =========");
    getAllArticles();
  }, []);
  const getAllArticles = () => {
    axios
      .get(`http://localhost:5000/articlesMySql`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        setArticles(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const addNewArticle = () => {
    axios
      .post(`http://localhost:5000/articles/createMySql`, {
        title: Title,
        description: description,
        author: Author,
      })
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        const newArray = [...articles];
        newArray.push(response.data);
        setArticles(newArray);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const deleteThisArticle = () => {
    axios
      .delete(`http://localhost:5000/articlesMySql/${id}`)
      .then((response) => {
        console.log("DATA: ", response.data);
        if (response.status === 200) {
        }
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  const NewArticle = articles.map((e, i) => {
    return (
      <div num={i + 1} Key={i}>
        <div className="card">
          <div class="card-body">
            <h4 class="card-title">Title:{e.Title}</h4>
            <p class="card-text">Description:{e.description}</p>
            <div class="card-text">Author:{e.Author}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="app">
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
        ></input>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </div>

      <form onClick={addNewArticle} className="NewItem">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Title"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          name="Description"
          placeholder="Description"
          onChange={(e) => {
            setNewDesc(e.target.value);
          }}
        />
        <input
          type="text"
          name="Author"
          className="form-control mb-2 mr-sm-2"
          placeholder="Author"
          onChange={(e) => {
            setNewAuthor(e.target.value);
          }}
        />
        <button type="submit" className="btn btn-danger mb-2">
          Add
        </button>
      </form>

      <div class="container">
        <div class="row row-cols-5">{NewArticle}</div>
      </div>
    </div>
  );
};
export default Articles;
