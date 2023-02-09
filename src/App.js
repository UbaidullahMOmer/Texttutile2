import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"


function App() {
  const [news, setNews] = useState([])
  const [con, setCon] = useState("general")
  const [ca, setCa] = useState("in")
  const [cah, setCah] = useState("India")
  const [coh, setCoh] = useState("Gernal")



  useEffect(() => {axios.get(`https://newsapi.org/v2/top-headlines?country=${ca}&category=${con}&apiKey=38daea198b1140c1b400c32ab3f20a2d`)
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles)
        // setPk(res.data.articles)
      })
  }, [con,ca])
  return (
    <>
    Ubaidullah
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
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
                  <li  onClick={() => { setCa("us"); setCah("United kigdom");} } class="dropdown-item" >United kigdom</li>
                  <li onClick={() => { setCa("hk"); setCah("Hong Kong"); }} class="dropdown-item" >Hong Kong</li>
                  <li onClick={() => { setCa("au"); setCah("Australia"); }} class="dropdown-item" >Australia</li>
                  <li onClick={() => { setCa("za"); setCah("South Africa"); }} class="dropdown-item" >South Africa</li>
                  <li onClick={() => { setCa("gr"); setCah("Greece"); }} class="dropdown-item" >Greece</li>
                  <li onClick={() => { setCa("na"); setCah("New Zealand"); }} class="dropdown-item" >New Zealand</li>
                  <li onClick={() => { setCa("kr"); setCah("South Korea"); }} class="dropdown-item" >South Korea</li>
                  <li onClick={() => { setCa("at"); setCah("Austria"); }} class="dropdown-item" >Austria</li>
                  <li onClick={() => { setCa("hu"); setCah("Hungary"); }} class="dropdown-item" >Hungary</li>
                  <li onClick={() => { setCa("gr"); setCah("Greece"); }} class="dropdown-item" >Greece</li>
                  <li onClick={() => { setCa("in"); setCah("India"); }} class="dropdown-item" >Greece</li>
                </ul>
             
              </div>
              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li onClick={() => { setCon("health"); setCoh("Health"); }}  class="dropdown-item">Health</li>
                  <li onClick={() => { setCon("science"); setCoh("Science"); }} class="dropdown-item">Science</li>
                  <li onClick={() => { setCon("sports"); setCoh("Sport"); }}  class="dropdown-item">Sport</li>
                  <li onClick={() => { setCon("technology"); setCoh("Technology"); }}  class="dropdown-item">Technology</li>
                  <li onClick={() => { setCon("entertainment"); setCoh("Entertainment"); }}  class="dropdown-item">Entertainment</li>
                  <li onClick={() => { setCon("business"); setCoh("Business"); }}  class="dropdown-item">Business</li>
                  <li onClick={() => { setCon("general"); setCoh("General"); }}  class="dropdown-item">General</li>
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
            ,marginLeft : "200px",
            color: "#0b2d39"
           }}>Latest News <br></br>
            Country : <span style={{color:"#1a6985" , fontSize:"36px"}}>{cah}</span>  <br></br>
              Category : <span style={{color:"#1a6985" ,fontSize:"36px"}}>{coh}</span></h1>
      <div className="container my-5">
        <div className="row text-center">
          {
            news.map((val) => {
              return (
                <div className="col my-3">
                  <div className="cards" style={{ width: "30rem" }}>
                    <img src={val.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                      <a href={val.url} >view more</a>
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
