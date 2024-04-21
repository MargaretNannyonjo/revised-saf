import React from "react";
import Waterfall from "../images/waterfall.webp";
import Pin from "../images/pin.png";
import Zanibar from "../images/zanzibar.jpeg";
import Serengeti from "../images/serengeti.jpeg";
import Pyramids from "../images/pyramids.avif";
import Snow from "../images/snow.jpg";
import Beaches from "../images/beaches.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <h1>SAFARI QUEST</h1>
        <h6>
          WHERE TASTE <br />
          MEETS <br />
          ADVENTURE
        </h6>
        <p>Taste the World, Explore the Flavours of Travel</p>
      </div>

      <div className="card-container">
        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img src={Zanibar} alt="Beach Hotel" class="card__picture-img" />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">Beach Hotels</h4>
            <p class="card__text">
              Offers direct access to beautiful sandy beaches and stunning ocean
              views.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Zanibar</p>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                src={Serengeti}
                alt="Yellowstone National Park"
                class="card__picture-img"
              />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">Wild Life</h4>
            <p class="card__text">
              An immersive and unforgettable experience for nature lovers and
              wildlife enthusiasts, appreciate the beauty and diversity of our
              planet's ecosystems.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Tanzania</p>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                src={Waterfall}
                alt="Maafushi Island"
                class="card__picture-img"
              />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">Water bodies</h4>
            <p class="card__text">
              Offers a range of accommodations, from luxury resorts to
              budget-friendly guesthouses, catering to various preferences and
              budgets.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Iceland</p>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                src={Pyramids}
                alt="Yellowstone National Park"
                class="card__picture-img"
              />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">The Great Pyramids</h4>
            <p class="card__text">
              The first national park in the world and renowned for its natural
              beauty, geothermal features, and diverse wildlife.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">Egypt</p>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                src={Snow}
                alt="Yellowstone National Park"
                class="card__picture-img"
              />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">Snow Adventures</h4>
            <p class="card__text">
              The first national park in the world and renowned for its natural
              beauty, geothermal features, and diverse wildlife.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">England</p>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <div class="card__picture">
              <div class="card__picture-overlay">&nbsp;</div>
              <img
                src={Beaches}
                alt="Yellowstone National Park"
                class="card__picture-img"
              />
            </div>
          </div>

          <div class="card__details">
            <h4 class="card__sub-heading">Beaches</h4>
            <p class="card__text">
              The first national park in the world and renowned for its natural
              beauty, geothermal features, and diverse wildlife.
            </p>

            <img className="pin" src={Pin} alt="pin" />

            <p className="pin-text">USA</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
