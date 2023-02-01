import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"


function App() {
  const [news, setNews] = useState([])
  const [con, setCon] = useState("general")
  const [ca, setCa] = useState("in")



  useEffect(() => {axios.get(`https://newsapi.org/v2/top-headlines?country=${ca}&category=${con}&apiKey=75fa6547b40c4f989a8758a77fd15552`)
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles)
        // setPk(res.data.articles)
      })
  }, [con,ca])
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="!" >NewsDay</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="!navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => { setCa("us") }}  class="btn btn-outline-primary" aria-current="page" href="!">Home</a>
              </li>
              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </button>
              
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu btn btn-outline-primary">
                  <li  onClick={() => { setCa("us") }} class="dropdown-item" >United kigdom</li>
                  <li onClick={() => { setCa("hk") }} class="dropdown-item" >Hong Kong</li>
                  <li onClick={() => { setCa("au") }} class="dropdown-item" >Australia</li>
                  <li onClick={() => { setCa("za") }} class="dropdown-item" >South Africa</li>
                  <li onClick={() => { setCa("gr") }} class="dropdown-item" >Greece</li>
                  <li onClick={() => { setCa("na") }} class="dropdown-item" >New Zealand</li>
                  <li onClick={() => { setCa("kr") }} class="dropdown-item" >South Korea</li>
                  <li onClick={() => { setCa("at") }} class="dropdown-item" >Austria</li>
                  <li onClick={() => { setCa("hu") }} class="dropdown-item" >Hungary</li>
                  <li onClick={() => { setCa("gr") }} class="dropdown-item" >Greece</li>
                </ul>
             
              </div>
              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li onClick={() => { setCon("health") }}  class="dropdown-item">Health</li>
                  <li onClick={() => { setCon("science") }} class="dropdown-item">Science</li>
                  <li onClick={() => { setCon("sports") }}  class="dropdown-item">Sport</li>
                  <li onClick={() => { setCon("technology") }}  class="dropdown-item">technology</li>
                  <li onClick={() => { setCon("entertainment") }}  class="dropdown-item">entertainment</li>
                  <li onClick={() => { setCon("business") }}  class="dropdown-item">business</li>
                  <li onClick={() => { setCon("general") }}  class="dropdown-item">general</li>
                </ul>
              </div>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <h1 className=".m-5" style={{ 
            marginTop : "30px"
            ,marginLeft : "200px"
           }}>Latest news</h1>
      <div className="container my-5">
        <div className="row text-center">
          {
            news.map((val) => {
              return (
                <div className="col my-3">
                  <div className="card" style={{ width: "30rem" }}>
                    <img src={val.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                      <a href={val.url} target="_blank">view more</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </>
  )
}
export default App;
