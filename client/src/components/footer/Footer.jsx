import "./Footer.scss";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a className="footer-socials__unit" href="https://www.instagram.com">
          <div
            className="insta"
            src="../../assets/images/icon-instagram.png"
            alt="Instagram"
          />
        </a>
        <a className="footer-socials__unit" href="https://www.facebook.com">
          <div
            className="facebook"
            src="../../assets/images/icon-facebook.png"
            alt="Facebook"
          />
        </a>
        <a className="footer-socials__unit" href="https://www.twitter.com">
          <div
            className="twitter"
            src="../../assets/images/icon-twitter.png"
            alt="Twitter"
          />
        </a>
      </div>
      <p className="footer__text">© DriveCalc. No Right Reserved.</p>
    </footer>
  );
}

export default Footer;
