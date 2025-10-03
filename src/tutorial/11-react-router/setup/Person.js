import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("Default Name");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((Person) => Person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back to Person
      </Link>
    </div>
  );
};

export default Person;
