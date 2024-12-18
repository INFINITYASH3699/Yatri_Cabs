import React from "react";
import styles from "./oneWayCabPage.module.css";

const OneWayCabPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h2>WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span className={styles.mainCont}>ONE-WAY JOURNEY</span>?</h2>
          <p>
            Our Oneway Cab Service Is Cheaper Than AC Bus And 2 Tier AC Train
            Ticket Fares. It Reduces Your Travel Time And You Travel At Your Own
            Private Space Also To Enjoy Your Journey. Our One Way Taxi Will Come
            At Your Doorstep And Take You To Your Desired Destination. So Book
            Your Oneway Cab From Lucknow To Gorakhpur Or Varanasi To Bareilly.
            <br />
            <a href="#read-more" className={styles.readMore}>
              Read More....
            </a>
          </p>
        </div>

        {/* Right Content */}
        <div className={styles.rightContent}>
          <img
            src="https://s3-alpha-sig.figma.com/img/a070/d294/1104eadb346e764206d3152303d4b169?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9hdHbZRmOZd953962bbtpReRS2AJchp~O~KNlmsoGTr2Cim7K3-OkVa2VEbR~eMU~ZryQqESdXQsIw97dUkzD06d1Z80g5tHp9YIwDITlIKhRkelsEzGkE6Q-ckXMxew-7qcYVfCFndqbGpAmy0iqZsIGU4qm3wJQve8yMjBdgKZ7LbTTnFnP5DwGRRKIzOAjNkeBhAo9f~SRYefwMAmeBposLYnhJGrOml-ni8aAVTqWMb4TLG0Ucy9dek-UIG-LrqW6YGe35A9yPlUt5S8ot1rsQ9J~wphDxn2TzpHLS2~DH2dKgDQkqaPgU04ojRtHJKngLydIx5OCSc9FAcuw__"
            alt="Car Gif"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className={styles.middleSection}>
        <h2>WHY CHOOSE ONE WAY CAB?</h2>
        <div className={styles.boxContainer}>
          {/* First Box */}
          <div className={styles.boxContent}>
            <ul>
              <li>Instant Booking & Confirmation</li>
              <li>Confirmed Booking Immediately</li>
              <li>No Return Fare For One-Way Trip</li>
              <li>Clean & Professional Cab Services</li>
              <li>Transparent Billing With GPS Based Billing System</li>
            </ul>
          </div>

          {/* Middle Box */}
          <div className={styles.box}>
            <img
              src="https://s3-alpha-sig.figma.com/img/75d2/fde0/d70679f6c50d0a186ae789890528ffcb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klS19zwDnsFT40Y5qEhfQXWEST3G4k7xXB5fPC9LYkHJvLHrWpijmJDKjKzGv58cs2~WmttGwRNU6-IwM18GjW01OR1r2D1XHBHBODReuL3OcMwVB7K4dbF9LqNrp03cpTtqHzt6TBvjQL-DrSrsqkPtrGRegKsbo4FxKofZS6LfevpgUapVuby1tLqU65Dn-eY-RSQp28Wqzvm4v-~~DZXdHhx87C~IRjDrKJtFcxZqYESx~WK8MqtkcnY1btJCNKm6Nirs7z322sVgOHtPKz6kK8HYad1h1ZmXnRcwQZTSGxqJWE5Kr8KM9w1zBapHtGfOrj02Mbv-ZLVjQZnRcw__"
              alt="Car Gif"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Third Box */}
          <div className={styles.boxContent}>
            <ul>
              <li>Pick-Up From Your House</li>
              <li>Dedicated Cab Just For You</li>
              <li>Drop To Your Desired Destination</li>
              <li>Completed More Than 20,000+ Oneway Trips</li>
              <li>Multiple Payment Options Including Credit Card</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <h3>
          DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className={styles.mainCont}>INTERCITY CAR RENTALS</span> IN
          INDIA - WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES
          IN EVERY CITY. UNLEASH YOUR JOURNEY!
        </h3>
      </div>
    </div>
  );
};

export default OneWayCabPage;
