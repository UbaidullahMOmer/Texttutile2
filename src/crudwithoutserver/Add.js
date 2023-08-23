import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = age;

    Employees.push({ id: uniqueId, Name: a, Age: b });

    history("/");
  };
  return (
    <div>
      sdfs
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button className="d-grid gap-2" onClick={(e) => handleSubmit(e)} type="submit">
        Submit
      </Button>
    </div>
  );
}

export default Add;
