import React, { useState, useEffect } from "react";
import axios from "axios";

// import Home from "./component/Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Add from "./component/Add";
// import Edit from "./component/Edit";
// import Home from "./components/pages/Home";
// import Home from "./crudwithoutserver/Home"
// import { Add } from "@mui/icons-material";
function App() {
  const [news, setNews] = useState([])
  const [con, setCon] = useState("general")
  const [ca, setCa] = useState("us")
  const [cah, setCah] = useState("US")
  const [coh, setCoh] = useState("top")

  const [loading, setLoading] = useState(true);

  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  useEffect(() => {
    setLoading(true); // Set loading to true when the request starts
    axios.get(`https://newsdata.io/api/1/news?apikey=pub_182712d5c2d9a82db77d9fa3d69b2cde69735&country=${ca}&category=${coh}&language=en`)
      .then((res) => {
        console.log(res);
        console.log(res?.data?.results);
        setNews(res?.data?.results);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when the request is finished (success or error)
      });
  }, [ca, coh]);
  function limitDescription(description, maxWords) {
    const words = description?.split(" ");
    if (words?.length > maxWords) {
      return words?.slice(0, maxWords)?.join(" ") + "...";
    }
    return description;
  }
  
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

              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenu btn btn-outline-primary">
                  <li onClick={() => { setCa("us"); setCah("United kigdom"); }} className="dropdown-item" >United kigdom</li>
                  <li onClick={() => { setCa("pk"); setCah("Pakistan"); }} className="dropdown-item" >Pakistan</li>
                  <li onClick={() => { setCa("au"); setCah("Australia"); }} className="dropdown-item" >Australia</li>
                  <li onClick={() => { setCa("za"); setCah("South Africa"); }} className="dropdown-item" >South Africa</li>
                  <li onClick={() => { setCa("gr"); setCah("Greece"); }} className="dropdown-item" >Greece</li>
                  <li onClick={() => { setCa("na"); setCah("New Zealand"); }} className="dropdown-item" >New Zealand</li>
                  <li onClick={() => { setCa("kr"); setCah("South Korea"); }} className="dropdown-item" >South Korea</li>
                  <li onClick={() => { setCa("at"); setCah("Austria"); }} className="dropdown-item" >Austria</li>
                  <li onClick={() => { setCa("hu"); setCah("Hungary"); }} className="dropdown-item" >Hungary</li>
                  <li onClick={() => { setCa("gr"); setCah("Greece"); }} className="dropdown-item" >Greece</li>
                  <li onClick={() => { setCa("in"); setCah("India"); }} className="dropdown-item" >India</li>
                </ul>

              </div>
              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li onClick={() => { setCon("health"); setCoh("Health"); }} className="dropdown-item">Health</li>
                  <li onClick={() => { setCon("science"); setCoh("Science"); }} className="dropdown-item">Science</li>
                  <li onClick={() => { setCon("sports"); setCoh("Sport"); }} className="dropdown-item">Sport</li>
                  <li onClick={() => { setCon("technology"); setCoh("Technology"); }} className="dropdown-item">Technology</li>
                  <li onClick={() => { setCon("entertainment"); setCoh("Entertainment"); }} className="dropdown-item">Entertainment</li>
                  <li onClick={() => { setCon("world"); setCoh("World"); }} className="dropdown-item">World</li>
                  <li onClick={() => { setCon("top"); setCoh("Top"); }} className="dropdown-item">Top</li>
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
        marginTop: "30px"
        , marginLeft: "200px",
        color: "#0b2d39"
      }}>Latest News <br></br>
        Country : <span style={{ color: "#1a6985", fontSize: "36px" }}>{cah}</span>  <br></br>
        Category : <span style={{ color: "#1a6985", fontSize: "36px" }}>{con}</span></h1>
      <div className="container my-5">
        <div className="row text-center">
          {loading ? (
            <>
            <h1>Loading...</h1>
            </>
          ) : (
            news.map((val) => {
              return (
                news.map((val) => {
                  return (
                    <div className="col my-3" key={val?.pubDate}>
          <div className="cards" style={{ width: "30rem" }}>
            <img
              src={`${val?.image_url}`}
              className="card-img-top"
              alt="product img"
              onError={(event) =>
                (event.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png")
              }
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              {/* Display full description or truncated description based on state */}
              <p className="card-text">
                {showFullDescription
                  ? val.description
                  : limitDescription(val.description, 30)}
              </p>
              {/* Show "View More" button only if description is truncated */}
              {val.description.split(" ").length > 30 && (
                <button
                  className="btn btn-link"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? "View Less" : "View More"}
                </button>
              )}
              <a href={val.link}>view more</a>
            </div>
          </div>
        </div>
                  );
                })
                
              );
            })
          )}

        </div>
      </div>

      {/* <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Add/>}/>
        </Routes>
      </Router> */}










    </>
  )
}
export default App;
