import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

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

function App() {
  return (
    <>



      {/* start front page of app */}
      <div>
        <div>
          <div className="flex flex-wrap justify-center items-center mb-10">
            <div className="text-5xl text-left font-bold mr-20">
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
      <div className="flex flex-wrap gap-[5.75rem] mb-5 ">
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
      <div className="flex flex-wrap gap-[5.75rem] mb-5">
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
      <div className="flex flex-wrap gap-[5.75rem] mb-5">
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
      <div className="flex flex-wrap gap-[5.75rem] mb-5">
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
      {/* end cards of product */}

      {/* start footer of home screen  */}
      <div>
        <Footer />
      </div>
      {/* end footer of home screen */}
    </>
  );
}

export default App;
