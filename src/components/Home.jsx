import React from "react";
import Homeimage from './homeimage/home.jpg'
import food1 from "./homeimage/food1.jpeg";
import food2 from "./homeimage/food2.jpeg";
import food3 from "./homeimage/food3.jpeg";
import food4 from "./homeimage/food4.jpeg";
import food5 from "./homeimage/food5.jpeg";
import food6 from "./homeimage/food6.webp";
import food7 from "./homeimage/food7.webp";
import food8 from "./homeimage/food8.jpeg";
import food9 from "./homeimage/food9.jpeg";
import food10 from "./homeimage/food10.jpeg";
import food11 from "./homeimage/food11.webp";
import food12 from "./homeimage/food12.webp";
import Card from "./Card";

const Home = () => {

  return (
    <div>
      {/* start front page of app */}
      <div>
        <div>
          <div className="flex flex-wrap justify-center items-center mt-10 mb-10">
            <div className="text-5xl text-left font-bold mr-20 ">
              <div className="p-2 text-black">Order Fast!</div>
              <div className="text-yellow-500 p-2">Craving</div>
            </div>
            <div>
              <img src={Homeimage} alt="Home" />
            </div>
          </div>
        </div>
      </div>
      {/* end front page of app */}

      {/* start cards of product */}
      <div className="">
        <div className="mb-8 text-3xl font-bold flex justify-start">
          Our Products
        </div>
        <div className="flex flex-wrap gap-[5.75rem] mb-5">
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
        <div className="flex flex-wrap gap-[5.75rem] mb-5 ">
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
        <div className="flex flex-wrap gap-[5.75rem] mb-5 ">
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
        <div className="flex flex-wrap gap-[5.75rem] mb-5 ">
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
    </div>
  );
};

export default Home;
