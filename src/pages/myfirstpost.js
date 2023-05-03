import * as React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Layout from "../@lekoarts/gatsby-theme-minimal-blog/components/Layout";

const FirstPage = () => {
  return (
<Layout pageTitle="TEST">
      <img src="../HomePage/FrontPageBaner1.png" alt="first" />
      <div className="social-icons">
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <span className="bi bi-facebook"><FontAwesomeIcon icon={faFacebook} /></span>
        </a>
        <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <span className="bi bi-twitter"><FontAwesomeIcon icon={faTwitter} /></span>
        </a>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <span className="bi bi-instagram"><FontAwesomeIcon icon={faInstagram} /></span>
        </a>
      </div>
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="mb-1" style={{ fontFamily: "Drugs, sans-serif" }}>
                &copy; Copyright Persian Master's Voice
                2022
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>

  );
};

export default FirstPage;
