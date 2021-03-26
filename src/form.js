import React from'react'
import { Route, Link, Switch } from "react-router-dom";
export default function profile(props){

const {data, submit, change, disable,error} = props

const onChange = (evt) =>{
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
}
const onSubmit = (evt)=>{
    evt.preventDefault();
    submit();
}


return(
  <div className="all">
    <header>
    <h1>Build your own pizza</h1>
    <img
        className="Build-image"
        src="https://i.ibb.co/BZ6VXj3/pizza-3007395.jpg"
        alt=""
      />

    </header>
    

    <form onSubmit={onSubmit}>
      
    <div>
      <h1>{error.name}</h1>
      <div> 
        <label>Time to Build your Pizza:
          <input
            value={data.name}
            onChange={onChange}
            name="name"
            type="text"
            placeholder="Your name here"
            /> 
        </label>
      </div>

      <div>
      <div className="size">
        <div className="backGround">
          <p>Choice of size</p>
        </div>
        <select name="size" value={data.size} onChange={onChange}>
            <option value="">---select---</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
      </div>

      <div>
         <div className="backGround">
           <p> Choice of sauce</p>
         </div>

        <div className="sauces">
           <label>
          <input
            type="radio"
            name="sauce"
            value="Original Red" // this option is 'hardcoded' and spread out (like dropdown)
            checked={data.sauce === "Original Red"}
            onChange={onChange}
          />Original Red
        </label>

        <label>
          <input
            type="radio"
            name="sauce"
            value="Garlic Ranch" // this option is 'hardcoded' and spread out (like dropdown)
            checked={data.sauce === "Garlic Ranch"}
            onChange={onChange}
          />Garlic Ranch
          </label>
          <label>
          <input
            type="radio"
            name="sauce"
            value="BBQ Sauce" // this option is 'hardcoded' and spread out (like dropdown)
            checked={data.sauce === "BBQ Sauce"}
            onChange={onChange}
          />BBQ Sauce
          </label>
          <label>
          <input
            type="radio"
            name="sauce"
            value="Spinach Alfredo" // this option is 'hardcoded' and spread out (like dropdown)
            checked={data.sauce === "Spinach Alfredo"}
            onChange={onChange}
          />Spinach Alfredo
          </label>
           </div>
           
      </div>
      </div>
      <div>
         <div className="backGround">
           <p> Add Toppings</p>
         </div>
         <div className="toppings">
           <div className="idkgridrow">
         <label>
          <input
            type="checkbox"
            name="Pepperoni"
            checked={data.Pepperoni}
            onChange={onChange}
          /> Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            name="Sausage"
            checked={data.Sausage}
            onChange={onChange}
          /> Sausage
        </label>

        <label>
          <input
            type="checkbox"
            name="CanadianBacon"
            checked={data.CanadianBacon}
            onChange={onChange}
          /> Canadian Bacon
        </label>
        <label>
          <input
            type="checkbox"
            name="SpicyItalianSausage"
            checked={data.SpicyItalianSausage}
            onChange={onChange}
          /> Spicy Italian Sausage
        </label>
        <label>
          <input
            type="checkbox"
            name="GrilledChicken"
            checked={data.GrilledChicken}
            onChange={onChange}
          /> Grilled Chicken
        </label>
        <label>
          <input
            type="checkbox"
            name="Onions"
            checked={data.Onions}
            onChange={onChange}
          /> Onions
        </label>
        <label>
          <input
            type="checkbox"
            name="GreenPepper"
            checked={data.GreenPepper}
            onChange={onChange}
          /> Green Pepper
        </label>
           </div>
        <div className="idkgridrow">

        <label>
          <input
            type="checkbox"
            name="DicedTomatos"
            checked={data.DicedTomatos}
            onChange={onChange}
          /> Diced Tomatos
        </label>
        <label>
          <input
            type="checkbox"
            name="BlackOlives"
            checked={data.BlackOlives}
            onChange={onChange}
          /> Black Olives
        </label>
        <label>
          <input
            type="checkbox"
            name="RoastedGarlic"
            checked={data.RoastedGarlic}
            onChange={onChange}
          /> Roasted Garlic
        </label>
        <label>
          <input
            type="checkbox"
            name="ArthichokeHeart"
            checked={data.ArthichokeHeart}
            onChange={onChange}
          /> Arthichoke Heart
        </label>
        <label>
          <input
            type="checkbox"
            name="ThreeCheese"
            checked={data.ThreeCheese}
            onChange={onChange}
          /> Three Cheese
        </label>
        <label>
          <input
            type="checkbox"
            name="Pineapple"
            checked={data.Pineapple}
            onChange={onChange}
          /> Pineapple
        </label>
        <label>
          <input
            type="checkbox"
            name="ExtraCheese"
            checked={data.ExtraCheese}
            onChange={onChange}
          /> Extra Cheese
        </label>
        </div>
         </div>
         <div>
         <div className="backGround">
           <p> Choice of substitute</p>
         </div>
         <label>
          <input
            type="checkbox"
            name="GluetenFreeCrust"
            checked={data.GluetenFreeCrust}
            onChange={onChange}
          /> Glueten Free Crust (+ 1 ETH )
        </label>
         </div>
         <div>
         <div className="backGround">
           <p>Special Intructions</p>
         </div><label>
          <input
            type="text"
            name="specialInstruction"
            checked={data.specialInstruction}
            onChange={onChange}
            placeholder="anything else?"
          />
        </label>

         </div>
      </div>
      
    
      <button id="addtocart">add to cart</button>
     <Link to="/done">
        <button id="place order">place order</button>
     </Link>
       
        </div>
    </form>
  </div>






    
)

}