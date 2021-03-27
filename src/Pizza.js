
import './App.css';
import Form from'./form';
import React from"react"
import { useEffect, useState } from 'react';
import Done from"./done"
import * as yup from "yup";
import schema from "./formSchema";





function App() {
  const intdata = {
    name:'',
    sauce:'',
    size:'',
    

  };
  const submitter= ()=>{

    const newOrder = {
      name: formData.name,
      size: formData.size,
      sauce: formData.sauce,
      topping: ['Pepperoni','Sausage','Canadian Bacon',
      'Spicy Italian Sausage','Grilled Chicken',
      'Onions','Green Pepper','Diced Tomatos',
      'Black Olives','Roasted Garlic','Arthichoke Heart',
      'Three Cheese','Pineapple','Extra Cheese'].filter(accept => formData[accept]),
      SpecialInstruction: formData.specialInstruction
  
  
    }
    console.log(newOrder)
    postNewOrder(newOrder);
    
  }
  const inputChange = (name, oooo) => {
    yup
      .reach(schema, name) 
      .validate(oooo) 
      .then(() => {
     
      })
      .catch((err) => {
       setError({...errors, [name]: err.errors[0]})
      });
    setData(
      {
      ...formData,[name]: oooo,
    });
    console.log(formData)
  };




  const postNewOrder = (aaa) =>{
    setOrder([...order, aaa])
    console.log(formData)
    setData(intdata)

  }
  const initialError = {
    name:'',
  };

  const [errors, setError] = useState(initialError)
  const [order, setOrder] = useState([])
  const [formData, setData] = useState(intdata);
  useEffect(()=>{console.log(order)},[order])
  useEffect(()=>{console.log(errors)},[errors])
  return (
    
    <div className="App">
      <Form data={formData} submit={submitter} change={inputChange} error={errors}/>
    </div>
    
  );
}

export default App;
