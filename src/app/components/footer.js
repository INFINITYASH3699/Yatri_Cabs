import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Middle Section: Logo */}
      <div className={styles.logoSection}>
        <Image
          src="https://s3-alpha-sig.figma.com/img/c50d/bfaa/bfb571c0bb9d27b31f47b87385029090?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DsGDsaLbICpEvtsN97DXTtBPkE1YjBTxaSkKlDVatXeFivIeH1K2OJdXvr5-sRg~IRC7yeDbD0QU4PHf-QLb3-Dmtj6mDcs9a8MPoo~jIKed3mA7kJ1o2HgdhVZRBUH6z3D39L0H2RQM0v8Nj0-6zjSDEsNPkWcZ-4gQWKJOKsU8AHBqzBAUfsoFM5TPd7FMlUvrP4qRnjmh-GxOcy4pQ5K-Y~5x5sX0Bo3b7PknjTBAqdWqMIvwkZskhhczbFPbGTZVw5G2Hw-NKhMbbr9RLVRXya5rygUYjdIUeN9dkfq~VlPfjVJceh-zpwTGHgUwoRFBG9OiqA5uAdlPmuss5Q__"
          alt="Logo"
          width={200}
          height={60}
          className={styles.logo}
        />
      </div>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy Policy</a>
      </div>

      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <p>Newsletter</p>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Email"
            className={styles.newsletterInput}
          />
          <button className={styles.arrowButton}>➡</button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>All copyright are reserved by YATRI CABS</p>
      </div>
    </footer>
  );
};

export default Footer;
