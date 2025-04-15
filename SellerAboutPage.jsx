import React from 'react';
import './SellerAboutPage.css'; // Import CSS
import globeImg from '../images/globe1.png'; // Import images if needed
import testimonial1 from '../images/download.jpeg';
import testimonial2 from '../images/download1.jpeg';
import testimonial3 from '../images/download 2.jpeg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SellerAboutPage = () => {

    const testimonials = [
      {
        img: testimonial1,
        text: "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional"
      },
     {
        img: testimonial2,
        text: "..."
      },
      {
        img: testimonial3,
        text: "..."
      },
    ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container">
      {/* Topbar */}
      <div className="topbar">
        <div>World's Largest Medical Equipment Market Place</div>
        <div className="top-links">
          <a href="#">My account</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo">1MDM</div>
        <nav className="nav">
          <a href="#">About Us</a>
          <a href="#">Our Story</a>
          <a href="#">Sell on 1MDM</a>
          <a href="#">Pricing</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-left">
          <h3>Sell on 1mdm.com</h3>
          <h1>Reach millions of B2B buyers globally</h1>
          <div className="hero-buttons">
            <button className="red-button">Start selling</button>
            <button className="outline-button">Chat with consultant</button>
          </div>
        </div>
        <div className="hero-center">
          <img src={globeImg} alt="Global Network" className="globe-img" />
        </div>
        <div className="hero-right">
          <div>
            <h2>26,000,000</h2>
            <p>active buyers globally</p>
          </div>
          <div>
            <h2>400,000</h2>
            <p>product inquiries daily</p>
          </div>
          <div>
            <h2>200</h2>
            <p>countries and regions represented</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="seller-about-section">
        <div className="seller-header">
          <h1>
            1mdm.com is a leading ecommerce platform that<br />
            helps SMEs go global
          </h1>
        </div>

        <div className="seller-content-section">
          <div className="seller-video">
            <iframe
      width="500"
      height="315"
      src="https://www.youtube.com/embed/TN7iJyc5Uks"
      title="1MDM Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
          </div>
          <div className="seller-text" style={{ marginLeft: '20px' }}>
      <p>Connect with millions of business buyers from around the world.</p>
      <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
      <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
    </div>
        </div>
      </section>

      {/* Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>
            Largest number of products & categories of <br />
            medical devices on a single place – <strong>1mdm.com</strong>
          </h1>
          <p>
            Connect with buyers worldwide for your product & <br />
            start selling now.
          </p>
        </div>
      </section>

      {/* Growth CTA */}
      <section className="growth-section">
        <h2>Grow your business with a suite of tools built for you</h2>
        <div className="cta-buttons">
          <button className="cta red"><i className="fas fa-store"></i> Start Selling</button>
          <button className="cta outline"><i className="fas fa-headset"></i> Customer Service</button>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <p>1mdm.com is a leading ecommerce platform that helps SMEs go global</p>
        <div className="info-grid">
          <p>Connect with millions of business buyers from around the world.</p>
          <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
          <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Largest number of products & categories of medical devices on a single place - 1mdm.com</h2>
        <p>Connect with buyers worldwide for your product & start selling now.</p>
        <p>Grow your business with a suite of tools built for you</p>
      </section>

      {/* Tools */}
      <section className="tools">
        {['Custom storefront', 'Advertising tools', 'Data and analytics', 'Customers support'].map(tool => (
          <div key={tool} className="tool-box">
            <h3>{tool}</h3>
          </div>
        ))}
      </section>

      {/* Storefront Info */}
      <section className="storefront">
        <h2>Set up a store that showcases your brand</h2>
        <p>Differentiate yourself from the competition with a full store dedicated to your products – no coding or design skills necessary!</p>
        <img src="/images/1mdm-product.jpg" alt="1mdm-product" />
      </section>

      {/* Testimonial Slider */}
      <section className="stories-slider">
        <h2>Success stories from 1mdm.com sellers</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <div key={index} className="story">
            <div className="story-text">
              <p>{item.text}</p>
            </div>
            <div className="story-image">
              <img src={item.img} alt={`testimonial-${index}`} />
            </div>
          </div>
          
          ))}
        </Slider>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Grow Your Business?</h2>
        <button className="cta red">Start Selling</button>
        <button className="cta outline">Chat with consultant</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>1mdm</h3>
            <p>One Medical Devices Market Place</p>
          </div>
          <div>
            <h3>Platform</h3>
            <ul>
              <li>Sell on 1MDM</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Brands</li>
              <li>Press Room</li>
              <li>Images & B-roll</li>
            </ul>
          </div>
          <div>
            <h3>Policies</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Delivery Information</li>
            </ul>
          </div>
          <div>
            <h3>Reach Us</h3>
            <ul>
              <li>Corporate Information</li>
              <li>Contact Us</li>
              <li>Start Selling</li>
              <li>Customer Service</li>
            </ul>
          </div>
        </div>
        <p className="footer-note">© 2025 1MDM ⚡ by SuperLabs</p>
      </footer>
    </div>
  );
};

export default SellerAboutPage;
