import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="body">
      <div className="header">
        <h1>Welcome to Chinese Delights</h1>
        <a href="/menu" className="cta-button">
          View Menu
        </a>
      </div>
      <div class="section">
        <p>
          Discover the authentic flavors of China at Chinese Delights. Our
          expert chefs prepare each dish with care and precision, bringing you a
          taste of traditional Chinese cuisine.
        </p>
      </div>

      <div className="footer">&copy; 2023 Chinese Delights Restaurant</div>
    </div>
  );
};

export default Home;
