import React, { useState, useEffect } from "react"
import axios from "axios"
function Sport() {
    const [news, setNews] = useState([])
    const [con, setCon] = useState("sports")

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?category=${con}&apiKey=6343d39ae0724883bb56efd258a98abc`)
            .then((res) => {
                console.log(res.data.articles);
                setNews(res.data.articles)
            })
    }, [con])
    return (
        <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="!">NewsDay</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="!navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!" onClick={() => { setCon("in") }}>India</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!" onClick={() => { setCon("ca") }}>Canada</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!" onClick={() => { setCon("za") }}>South Africa</a>
              </li>
              <div className="btn-group">
                <button type="button" className="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Action
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="!" onClick={() => { setCon("za") }}>Action</a></li>
                  <li><a className="dropdown-item" href="!" onClick={() => { setCon("za") }}>Action</a></li>
                  <li><a className="dropdown-item" href="!" onClick={() => { setCon("za") }}>Action</a></li>
                  <li><a className="dropdown-item" href="!" onClick={() => { setCon("za") }}>Action</a></li>
                  <li><a className="dropdown-item" href="!" onClick={() => { setCon("za") }}>Action</a></li>
                  <li><a className="dropdown-item" href="!" onClick={() => { setCon("za") }}>Action</a></li>
                  <li><a className="dropdown-item" href="!" onClick={() => { setCon("za") }}>Action</a></li>
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
            <div className="container my-5">
                <div className="row text-center">
                    {
                        news.map((val) => {
                            return (
                                    <div className="col my-3">
                                        <div className="card" style={{ width: "18rem" }}>
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
export default Sport;
