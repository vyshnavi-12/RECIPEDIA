import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = () => {
  
      return (
        <div>
        <div className="background-container">
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="/img1.jpg" className="d-block w-100 h-500px" alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Healthy and Delicious Meals</h5>
                <p>Explore a variety of nutritious and tasty recipes that promote a healthy lifestyle.</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="/img2.jpg" className="d-block w-100 h-500px" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Quick & Easy Recipes</h5>
                <p>Short on time? Discover simple, quick, and delicious meals ready in minutes.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/img3.jpg" className="d-block w-100 h-500px" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Indulgent Desserts</h5>
                <p>Satisfy your sweet tooth with mouthwatering desserts and treats.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div className="col">
    <Link to="/veg" className="text-decoration-none">
      <div className="card animate-card">
        <img src="/veg.jpg" className="card-img-top" alt="Veg Recipes" />
        <div className="card-body">
          <h5 className="card-title">Veg Recipes</h5>
          <p className="card-text">Delicious vegetarian meals to enjoy.</p>
        </div>
      </div>
    </Link>
  </div>
  <div className="col">
    <Link to="/nonveg" className="text-decoration-none">
      <div className="card animate-card">
        <img src="/nonveg.jpg" className="card-img-top" alt="Non-Veg Recipes" />
        <div className="card-body">
          <h5 className="card-title">Non-Veg Recipes</h5>
          <p className="card-text">Tasty non-vegetarian dishes for every occasion.</p>
        </div>
      </div>
    </Link>
  </div>
  <div className="col">
    <Link to="/dessert" className="text-decoration-none">
      <div className="card animate-card">
        <img src="/dessert.jpg" className="card-img-top" alt="Desserts" />
        <div className="card-body">
          <h5 className="card-title">Desserts</h5>
          <p className="card-text">Sweet treats and desserts to satisfy your cravings.</p>
        </div>
      </div>
    </Link>
  </div>
  <div className="col">
    <Link to="/beverages" className="text-decoration-none">
      <div className="card animate-card">
        <img src="/beverages.jpg" className="card-img-top" alt="Beverages" />
        <div className="card-body">
          <h5 className="card-title">Beverages</h5>
          <p className="card-text">Refreshing drinks and smoothies.</p>
        </div>
      </div>
    </Link>
  </div>
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
        <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
        <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
        <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <p>Subscribe for new recipes</p>
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-btn">Subscribe</button>
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
