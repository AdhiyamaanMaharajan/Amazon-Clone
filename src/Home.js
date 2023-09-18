import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/41bEL9OlxtL._SX1500_.jpg"
        alt="Amazon Banner"
      />
      <div className="home__row">
        <Product
          id="123"
          title="FORSINING Casual Analog Men's Watch (Silver Dial Silver Colored Strap)"
          price={6000}
          rating={5}
          image="https://m.media-amazon.com/images/I/71aZhcBIlxL._AC_UL400_.jpg"
        />

        <Product
          id="22345"
          title="CRADIAC HUSTLER SINGLE SPEED 26 T Hybrid Cycle/City Bike (Single Speed, Grey)"
          price={8500}
          rating={3}
          image="https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/t/a/g/hustler-single-speed-26-18-5-cradiac-108-single-speed-original-imagqtzqpmgyejaw.jpeg?q=70"
        />
      </div>

      <div className="home__row">
        <Product
          id="12332"
          title="Happilo Premium Natural Californian Almonds (200 g)"
          price={300}
          rating={5}
          image="https://rukminim2.flixcart.com/image/416/416/xif0q/snack-savourie/d/r/v/-original-imaghfn8j2vrwfcy.jpeg?q=70"
        />
        <Product
          id="121"
          title="Royalbox Meditating Buddha Statue For Home Decor Idol/Showpiece Decorative Showpiece - 22 cm (Polyresin, Gold)"
          price={350}
          rating={5}
          image="https://rukminim2.flixcart.com/image/612/612/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70"
        />
        <Product
          id="1232"
          title="SPYDER HOME DECORE Metal Table & Chair Set  (Finish Color - white-yellow, Pre Assembled)"
          price={24000}
          rating={5}
          image="https://rukminim2.flixcart.com/image/416/416/kz1lle80/outdoor-set/x/0/u/30-white-4-1-wicker-30-98980101-white-adiworldcraft-30-white-original-imagb5fgsrsfb7fn.jpeg?q=70"
        />
      </div>

      <div className="home__row">
        <Product
          id="1230"
          title="FUJIFILM Instax Mini 9 Instant Camera (Blue)"
          price={4999}
          rating={5}
          image="https://rukminim2.flixcart.com/image/416/416/j70sccw0/instant-camera/n/t/r/cobalt-blue-with-brown-case-and-40-shots-mini-9-mini-9-fujifilm-original-imaex6pghgtrzv66.jpeg?q=70"
        />
      </div>
    </div>
  );
}

export default Home;

// each product in the home page will have image, price and titile of it.
