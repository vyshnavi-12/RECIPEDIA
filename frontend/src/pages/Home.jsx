import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="background-container">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="/img1.jpg"
                className="d-block w-100 carousel-img"
                alt="Healthy meals"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Healthy and Delicious Meals</h5>
                <p>
                  Explore nutritious recipes that promote a healthy lifestyle.
                </p>
                <Link to="/explore" className="cta-btn">
                  Explore Recipes
                </Link>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="/img2.jpg"
                className="d-block w-100 carousel-img"
                alt="Quick recipes"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Quick & Easy Recipes</h5>
                <p>Discover meals ready in minutes.</p>
                <Link to="/explore" className="cta-btn">
                  Explore Recipes
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img3.jpg"
                className="d-block w-100 carousel-img"
                alt="Desserts"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Indulgent Desserts</h5>
                <p>Satisfy your sweet tooth with mouthwatering treats.</p>
                <Link to="/explore" className="cta-btn">
                  Explore Recipes
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
            aria-label="Previous slide"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
            aria-label="Next slide"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4 mb-4 mx-2">
          {[
            {
              path: "/veg",
              img: "/veg.jpg",
              title: "Veg Recipes",
              desc: "Delicious vegetarian meals.",
            },
            {
              path: "/nonveg",
              img: "/nonveg.jpg",
              title: "Non-Veg Recipes",
              desc: "Tasty dishes for every occasion.",
            },
            {
              path: "/dessert",
              img: "/dessert.jpg",
              title: "Desserts",
              desc: "Sweet treats to satisfy cravings.",
            },
            {
              path: "/beverages",
              img: "/beverages.jpg",
              title: "Beverages",
              desc: "Refreshing drinks and smoothies.",
            },
          ].map((card) => (
            <div className="col" key={card.path}>
              <Link to={card.path} className="text-decoration-none">
                <div className="card animate-card">
                  <img
                    src={card.img}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <footer className="recipe-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/veg">Vegetarian</Link>
            <Link to="/nonveg">Non-Vegetarian</Link>
            <Link to="/dessert">Desserts</Link>
            <Link to="/beverages">Beverages</Link>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <a href="#">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe for new recipes</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Recipe Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
