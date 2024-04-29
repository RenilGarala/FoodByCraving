import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import food1 from "./images/food1.jpeg";
import food2 from "./images/food2.jpeg";
import food3 from "./images/food3.jpeg";
import food4 from "./images/food4.jpeg";
import food5 from "./images/food5.jpeg";
import food6 from "./images/food6.webp";
import food7 from "./images/food7.webp";
import food8 from "./images/food8.jpeg";
import food9 from "./images/food9.jpeg";
import food10 from "./images/food10.jpeg";
import food11 from "./images/food11.webp";
import food12 from "./images/food12.webp";
import Home from "./images/home.jpg";
import cravings from "./images/cravings.png";

function App() {
  
  const [color, setColor]=useState("rgb(251 191 36)");


  return (
    <>
      {/* start navbar of home page  */}
      <div style={{backgroundColor:color}} className="animate__animated rounded-full animate__fadeInDown">
        <Navbar navimage={cravings} />
      </div>
      {/* end navbar of home page  */}

      {/* start front page of app */}
      <div>
        <div>
          <div className="flex flex-wrap justify-center items-center mt-10 mb-10 animate__animated animate__fadeIn">
            <div className="text-5xl text-left font-bold mr-20 ">
              <div className="p-2">Order Fast!</div>
              <div className="text-yellow-500 p-2">Craving</div>
            </div>
            <div>
              <img src={Home} alt="Home" />
            </div>
          </div>
        </div>
      </div>
      {/* end front page of app */}

      {/* start cards of product */}
      <div className="wow animate__animated animate__fadeInUp">
        <div className="mb-8 text-3xl font-bold flex justify-start">
          Our Products
        </div>
        <div className="flex flex-wrap gap-[5.75rem] mb-5 wow animate__animated animate__fadeInUp">
          <Card
            foodImage={food1}
            foodName="Pinute Pow"
            Discription="Savoring flavors, indulging in culture's bounty."
            tag1="#Cheesy"
            tag2="#Savory"
            tag3="#Comforting"
          />
          <Card
            foodImage={food2}
            foodName="Veg Hogdog"
            Discription="A symphony of tastes, each bite crescendo."
            tag1="#Sausage"
            tag2="#Freshness"
            tag3="#Delicious"
          />
          <Card
            foodImage={food3}
            foodName="Pasta"
            Discription="Spices dance, flavors sing, plates rejoice."
            tag1="#versatile"
            tag2="#Delicious"
            tag3="#timeless"
          />
        </div>
        <div className="flex flex-wrap gap-[5.75rem] mb-5 wow animate__animated animate__fadeInUp">
          <Card
            foodImage={food4}
            foodName="Veg Pakoda"
            Discription="Culinary artistry on every plate displayed."
            tag1="#Crispy"
            tag2="#Spicy"
            tag3="#Snack"
          />
          <Card
            foodImage={food5}
            foodName="Mushroom with Veg"
            Discription="Gastronomic adventures await, a journey beckons."
            tag1="#Fresh"
            tag2="#Earthiness"
            tag3="#Nutritious"
          />
          <Card
            foodImage={food6}
            foodName="Simple Salad"
            Discription="From farm to fork, nature's bounty celebrated."
            tag1="#Fresh"
            tag2="#crisp"
            tag3="#vibrant"
          />
        </div>
        <div className="flex flex-wrap gap-[5.75rem] mb-5 wow animate__animated animate__fadeInUp">
          <Card
            foodImage={food7}
            foodName="Tea or Coffee"
            Discription="Savory delights, a palate's delightful embrace."
            tag1="#Chai"
            tag2="#Aromatic"
            tag3="#Tradition"
          />
          <Card
            foodImage={food8}
            foodName="Veg Salad "
            Discription="A mosaic of flavors, a feast for the senses."
            tag1="#nutritious"
            tag2="#colorful"
            tag3="#Fresh"
          />
          <Card
            foodImage={food9}
            foodName="Veg Burger"
            Discription="Comfort found in the warmth of homemade meals."
            tag1="#Cheesy"
            tag2="#Savory"
            tag3="#Comforting"
          />
        </div>
        <div className="flex flex-wrap gap-[5.75rem] mb-5 wow animate__animated animate__fadeInUp">
          <Card
            foodImage={food10}
            foodName="Mushroom Fettuccine"
            Discription="Global cuisines unite, diversity on the table."
            tag1="#creamy"
            tag2="#earthy"
            tag3="#indulgent"
          />
          <Card
            foodImage={food11}
            foodName="Almonds"
            Discription="Culinary poetry, each dish a verse to savor."
            tag1="#Nutritious"
            tag2="#Crunchy"
            tag3="#healthy"
          />
          <Card
            foodImage={food12}
            foodName="Cheese Popcorn"
            Discription="Sharing meals, sharing stories, forging bonds eternal."
            tag1="#buttery"
            tag2="#addictive"
            tag3="#Crunchy"
          />
        </div>
      </div>
      {/* end cards of product */}

      <div className="mt-20 wow animate__animated animate__fadeInUp">
        <div className="mb-8 text-3xl font-bold flex justify-start">
          Change Theme
        </div>
        <div className="flex gap-5 ">
            <button onClick={()=>setColor("rgb(252 165 165)")} className="border-none text-md">Light Red</button>
            <button onClick={()=>setColor("rgb(253 186 116)")} className="border-none text-md">Light Orange</button>
            <button onClick={()=>setColor("rgb(52 211 153)")} className="border-none text-md">Light Green</button>
            <button onClick={()=>setColor("rgb(147 197 253)")} className="border-none text-md">Light Blue</button>
            <button onClick={()=>setColor("rgb(251 191 36)")} className="border-none text-md bg-gray-300">Set Default Color</button>
        </div>
      </div>

      {/* start footer of home screen  */}
      <div style={{backgroundColor:color}} className="wow animate__animated animate__fadeInUp">
        <Footer footimage={cravings} />
      </div>
      {/* end footer of home screen */}
    </>
  );
}

export default App;
