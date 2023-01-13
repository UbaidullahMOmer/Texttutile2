import React from "react"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import BasicTable from "./components/BasicTable"
function App() {
  return (
    <>
      <Navbar title="Texttutile" about="About" />
      <div className="container my-3">
      <TextForm headding="Enter the text to analyze below"/>
      <BasicTable/>
      </div>
    </>
  )
}

export default App
