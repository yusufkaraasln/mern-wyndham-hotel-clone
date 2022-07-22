import React from "react";
import "./footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-contact">
        <div className="footer-contact-info">
          <a href="https://twitter.com/ramadasakarya">
            <i class="fa-brands fa-twitter"></i>
          </a>

          <a href="https://www.instagram.com/ramada_sakarya">
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/ramada-by-wyndham-sakarya-4a2620190/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=tr">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <span>© 2022 Ramada By Wyndham SAKARYA - Tüm hakları saklıdır.</span>
      </div>
    </div>
  );
}

export default Footer;
