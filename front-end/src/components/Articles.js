import React, { useState, useEffect } from "react";
import axios from "axios";
import NewItem from "./NewItem";
import ArticleItem from "./ArticleItem";
import ID from './ID'

const Articles = () => {
  
  const [articales, setArticales] = useState([]);
  const [allArticales, setAllArticales] = useState([])
  const [search, setSearch] = useState('');
  const[weather,SetWeather]=useState('');
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
    setSearch(e.target.value)
    if (e.target.value == '') {
        setArticales(
            [...allArticales]
        )
        return
    }
    setArticales(
        articales.filter((value) => {
            return value.title.indexOf(search) != -1;
        })
    )
}
 
  const renderArticles = articales.map((e,i) => {
    return <ArticleItem article={e} key={i} />;
  });

  return (
    <div className="app">
      
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
          value={search} 
          onChange={handleSearchChange}
        ></input><br></br>
        <p>{weather && weather.name}</p>
      </div>
      <div>
        <NewItem getAllArticles={getAllArticles} />
      </div>
      
      <div className="container">
        <div className="row row-cols-4">{renderArticles}</div>
      </div>
    </div>
  );
};
export default Articles;
