import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// We'll need React Router's own version of the History API
import { useHistory } from "react-router-dom";
import Form from"./form";

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list

  

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://i.ibb.co/BZ6VXj3/pizza-3007395.jpg"
        alt=""
      />
      <Link to="/Pizza" className="md-button shop-button">
        Build you pizza?
      </Link>
      </div>
   
  )
}
