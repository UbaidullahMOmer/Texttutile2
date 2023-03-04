import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"


function App() {
  const [news, setNews] = useState([])
  const [con, setCon] = useState("general")
  const [ca, setCa] = useState("us")
  const [cah, setCah] = useState("US")
  const [coh, setCoh] = useState("top")

 


  useEffect(() => {axios.get(`https://newsdata.io/api/1/news?apikey=pub_182712d5c2d9a82db77d9fa3d69b2cde69735&country=${ca}&category=${coh}&language=en`)
      .then((res) => {
        console.log(res.data.results);
        setNews(res.data.results)
        // setPk(res.data.articles)
      })
  }, [ca,coh])
  return (
    <>
    
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="!" >NewsDay</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="!navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => { setCa("pk") }}  class="btn btn-outline-primary" aria-current="page">Home</a>
              </li>
              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </button>
              
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu btn btn-outline-primary">
                  <li  onClick={() => { setCa("us"); setCah("United kigdom");} } class="dropdown-item" >United kigdom</li>
                  <li onClick={() => { setCa("pk"); setCah("Pakistan"); }} class="dropdown-item" >Pakistan</li>
                  <li onClick={() => { setCa("au"); setCah("Australia"); }} class="dropdown-item" >Australia</li>
                  <li onClick={() => { setCa("za"); setCah("South Africa"); }} class="dropdown-item" >South Africa</li>
                  <li onClick={() => { setCa("gr"); setCah("Greece"); }} class="dropdown-item" >Greece</li>
                  <li onClick={() => { setCa("na"); setCah("New Zealand"); }} class="dropdown-item" >New Zealand</li>
                  <li onClick={() => { setCa("kr"); setCah("South Korea"); }} class="dropdown-item" >South Korea</li>
                  <li onClick={() => { setCa("at"); setCah("Austria"); }} class="dropdown-item" >Austria</li>
                  <li onClick={() => { setCa("hu"); setCah("Hungary"); }} class="dropdown-item" >Hungary</li>
                  <li onClick={() => { setCa("gr"); setCah("Greece"); }} class="dropdown-item" >Greece</li>
                  <li onClick={() => { setCa("in"); setCah("India"); }} class="dropdown-item" >India</li>
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
                  <li onClick={() => { setCon("world"); setCoh("World"); }}  class="dropdown-item">World</li>
                  <li onClick={() => { setCon("top"); setCoh("Top"); }}  class="dropdown-item">Top</li>
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
      <center><h1>Ubaidullah</h1></center>
      
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
                    <img src={val.image_url} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                      <a href={val.link} >view more</a>
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
