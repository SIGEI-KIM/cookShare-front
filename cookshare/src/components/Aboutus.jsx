import React from 'react';
import cover55 from '../assets/images/cover55.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const AboutUs = () => {
  const facebookUrl = 'https://www.facebook.com/Sigeie?mibextid=ZbWKwL'; 
  const instagramUrl = 'instagram.com/esigei091'; 
  const twitterUrl = 'x.com/@sigei091'; 

  return (
    <div className="about-us container mt-5">
      <h2>About CookShare</h2>
      <p>
        Welcome to CookShare, your vibrant community for sharing and discovering
        delicious recipes from around the globe. We're more than just a recipe
        platform; we're a space where food lovers connect, inspire, and celebrate
        the joy of cooking. Our mission is to make culinary exploration accessible
        and enjoyable for everyone.
      </p>

      {/* Banner Image */}
      <div className="banner">
        <img
          src={cover55}
          alt="CookShare Banner"
          className="img-fluid"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>

      <h2>Our Core Values</h2>
      <p>
        At CookShare, we are driven by:
      </p>
      <ul>
        <li>
          <strong>Community:</strong> Fostering a supportive and inclusive
          environment for all food enthusiasts.
        </li>
        <li>
          <strong>Innovation:</strong> Continuously improving our platform to
          provide the best user experience and culinary inspiration.
        </li>
        <li>
          <strong>Passion:</strong> Sharing our love for food and cooking with
          the world.
        </li>
        <li>
          <strong>Accessibility:</strong> Ensuring everyone can participate and find value in our platform.
        </li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        We believe food is a universal language that brings people together. Our
        mission is to empower you to explore new flavors, share your culinary
        talents, and build lasting connections through the love of cooking.
      </p>

      <h2>Meet Our Team</h2>
      <p>
        CookShare is powered by a team of passionate individuals dedicated to
        creating a delightful culinary experience.
      </p>
      <ul>
        <li>
          <strong>Jane Doe</strong> - Co-founder & Chief Culinary Officer
          <p>
            Jane brings years of culinary expertise and a passion for creating
            innovative and delicious recipes.
          </p>
        </li>
        <li>
          <strong>Simpson Alfred</strong> - Co-founder & Lead Developer
          <p>
            Simpson is the technical backbone of CookShare, ensuring a seamless
            and user-friendly experience.
          </p>
        </li>
        <li>
          <strong>Emily Johnson</strong> - Community Engagement Manager
          <p>
            Emily is dedicated to building a vibrant and engaging community for
            CookShare users.
          </p>
        </li>
        <li>
          <strong>David Lee</strong> - Content Creator & Recipe Curator
          <p>
            David is responsible for sourcing and creating high-quality, diverse,
            and engaging content for our users.
          </p>
        </li>
      </ul>

      <h2>Connect With Us</h2>
      <p>
        We'd love to hear from you! Reach out to us through the following channels:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:info@cookshare.com">info@cookshare.com</a>
        </li>
        <li>
          <strong>Phone:</strong> +254-745-243-613
        </li>
        <li>
          <strong>Address:</strong> 123 CookShare Lane, Foodie City, State, 12345
        </li>
        <li>
          <strong>Social Media:</strong>
          <ul>
            <li>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Join Our Community</h2>
      <p>
        Whether you're a seasoned chef or just starting your culinary journey,
        CookShare welcomes you. Join our community to share your passion for
        food, discover new recipes, and connect with fellow food lovers. Let's
        cook together!
      </p>
    </div>
  );
};

export default AboutUs;
