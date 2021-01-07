import React, { useState, useEffect } from "react";
import axios from "axios";
import NewItem from "./NewItem";
import {Link} from "react-router-dom";
const Articles = () => {
  const [articales, setArticales] = useState([]);
  const [allArticales, setAllArticales] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, SetWeather] = useState("");
  const [title, setNewTitle] = useState("");
  const [img_url, SetImg] = useState("");
  const [description, setNewDesc] = useState("");
  const [author, setNewAuthor] = useState("");
  const [authorNew, setAuthor] = useState("");
  
  useEffect(() => {
    getAllArticles();
    weatherData();
  }, []);

  const weatherData = () => {
    axios
      .get(`http://localhost:5000/weather`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        SetWeather(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const getAllArticles = () => {
    axios
      .get(`http://localhost:5000/articlesMySql`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        setArticales(response.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value == "") {
      setArticales([...allArticales]);
      return;
    }
    setArticales(
      articales.filter((value) => {
        return value.title.indexOf(search) != -1;
      })
    );
  };
  const deleteThisArticle = (id) => {
    axios
      .delete(`http://localhost:5000/articlesMySqlDelete/${id}`)
      .then((res) => {
        const array = allArticales.filter((value, i) => {
          return id != value.id;
        });
        setAllArticales(array);
        setArticales(array);
      });
  };
 
  const fav = (value) => {
    const fav = value.fav === 1 ? 0 : 1;
    axios
      .post("http://localhost:5000/updateFavById", { id: value.id, fav })
      .then((res) => {
        getAllArticles();
      });
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
          value={search}
          onChange={handleSearchChange}
        ></input>
        <div className="row">
        {weather && (
          <div className="col-md-8 "
          >
            Country: {weather.name} / Temp: {weather.main.temp} / Weather:{" "}
            {weather.weather[0].description}
          </div>
        )}
      </div>
      </div>
      <div>
        <NewItem getAllArticles={getAllArticles} />
      </div>

      <div className="container">
        <div className="row row-cols-4">
          {articales.map((value, i) => {
            return (
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">
                  <Link to={'/Article/' + value.id} params={{ id: value.id }}>{value.title}</Link>
                  </h4>
                </div>
                <div className="card-img-bottom">
                  <picture>
                    <img
                      src={value.img_url}
                      className="img-fluid img-thumbnail"
                      alt="..."
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <p className="card-text">{value.description}</p>
                </div>
                <div className="card-footer"> Author: {value.author}</div>
                <button
                  id="B3"
                  style={{ width: "100%" }}
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteThisArticle(value.id);
                  }}
                >
                  Delete{" "}
                </button>
                
                <button
                  id="B4"
                  type="button"
                  style={{ width: "100%" }}
                  className="btn btn-primary"
                  onClick={() => {
                    fav(value);
                  }}
                >
                  
                  {value.fav == 1 && "Add To Favorate"}
                  {value.fav == 0 && "Remove To Favorate"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Articles;
