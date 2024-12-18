import React from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import contact from "../assets/contact.png";
import download from "../assets/download.png";
import profile from "../assets/profile.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left Side: Logo */}
      <div className={styles.logoSection}>
        <Image
          src="https://s3-alpha-sig.figma.com/img/c50d/bfaa/bfb571c0bb9d27b31f47b87385029090?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DsGDsaLbICpEvtsN97DXTtBPkE1YjBTxaSkKlDVatXeFivIeH1K2OJdXvr5-sRg~IRC7yeDbD0QU4PHf-QLb3-Dmtj6mDcs9a8MPoo~jIKed3mA7kJ1o2HgdhVZRBUH6z3D39L0H2RQM0v8Nj0-6zjSDEsNPkWcZ-4gQWKJOKsU8AHBqzBAUfsoFM5TPd7FMlUvrP4qRnjmh-GxOcy4pQ5K-Y~5x5sX0Bo3b7PknjTBAqdWqMIvwkZskhhczbFPbGTZVw5G2Hw-NKhMbbr9RLVRXya5rygUYjdIUeN9dkfq~VlPfjVJceh-zpwTGHgUwoRFBG9OiqA5uAdlPmuss5Q__"
          alt="Logo"
          width={180}
          height={60}
          className={styles.logo}
        />
      </div>

      {/* Middle Section: 24/7 and Mobile Number */}
      <div className={styles.middleSection}>
        <Image src={contact} alt="Mobile Icon" width={320} height={70} />
      </div>

      {/* Right Side: Download App and My Account */}
      <div className={styles.rightSection}>
        <div className={styles.downloadApp}>
          <Image src={download} className={styles.downloadAppImg} alt="Mobile Icon" width={40} height={40} />
          <div>Download App</div>
        </div>
        <div className={styles.myAccount}>
          <Image src={profile} className={styles.myAccountImg} alt="Mobile Icon" width={40} height={40} />
          <div className={styles.myAccountTxt}>Hi, Ravi</div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
