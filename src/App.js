import React from "react"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {
  return (
    <>
      <Navbar title="Texttutile" about="About" />
      <div className="container my-3">
      <TextForm headding="Enter the text to analyze below"/>
      </div>
    </>
  )
  }
export default App;
