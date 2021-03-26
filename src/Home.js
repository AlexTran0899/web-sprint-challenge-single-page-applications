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
        src="https://pixabay.com/get/gf013465103ebb8e15d3f7ec09fe29aedf05eeaa1f5040302607516295c5fb30de82f6456595339ff6ba25676359f0502.jpg"
        alt=""
      />
      <Link to="/Pizza" className="md-button shop-button">
        Build you pizza?
      </Link>
      </div>
   
  )
}
