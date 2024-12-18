import React from "react";
import InBetween from "./InBetweenSection";
import Image from "next/image";
import styles from "./featurePage.module.css";
import hand from "../assets/hand.png";
import location from "../assets/location.png";
import car from "../assets/driving.png";
import flag from "../assets/flag.png";
import people from "../assets/people.png";
import mobile from "../assets/mobile.png";
import paid from "../assets/paid.png";

const FeaturePage = () => {
  return (
    <div className={styles.pageContainer}>
      <InBetween />
      {/* Section with Three Columns */}
      <div className={styles.threeColumnsSection}>
        <div className={styles.columnsContainer}>
          {/* First Column */}
          <div className={styles.column}>
            <div className={styles.icon}>
              {/* Hand Symbol */}
              <Image src={hand} alt="Flag Icon" width={100} height={70} />
            </div>
            <h3 className={styles.columnHeader}>RETURN FARE, NOT FAIR!</h3>
            <p>
              Why Pay For Return Journey When You Are Travelling One-Way? NOW
              Get Discounted AC Taxi At Just Half Of The Round Trip Cost For
              Your Oneway Travel.
            </p>
          </div>

          {/* Vertical Line */}
          <div className={styles.verticalLine}></div>

          {/* Second Column */}
          <div className={styles.column}>
            <div className={styles.icon}>
              {/* Location Symbol */}
              <Image src={location} alt="Flag Icon" width={60} height={80} />
            </div>
            <h3 className={styles.columnHeader}>GPS BASED BILLING SYSTEM</h3>
            <p>
              Since The GPS Data Captures The Actual Distance And Time Traveled,
              It Reduces The Chance Of Kilometer Tampering Or Discrepancies In
              Billing.
            </p>
          </div>

          {/* Vertical Line */}
          <div className={styles.verticalLine}></div>

          {/* Third Column */}
          <div className={styles.column}>
            <div className={styles.icon}>
              {/* Car Symbol */}
              <Image src={car} alt="Flag Icon" width={70} height={70} />
            </div>
            <h3 className={styles.columnHeader}>NOW AVAILABLE ROUTES ARE!</h3>
            <p>
              Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section Below Columns */}
      <div className={styles.bottomInfoSection}>
        <h3>INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h3>
        <p>
          At Yatri Cabs, We Pride Ourselves On Being A Top-Tier Online Cab
          Booking Service, Delivering Reliable And Premium Intercity And Local
          Taxi Services. With Over A Decade Of Experience, We Have Become The
          Leading Chauffeur-Driven Car Rental Company In India, Renowned For Our
          Expansive Coverage Across The Country.
        </p>
      </div>

      {/* Section with Image and Why Yatri */}
      <div className={styles.imageTextSection}>
        {/* Left Side Image */}
        <div className={styles.leftImage}>
          <h3>
            WHY <span className={styles.highLight}>YATRI</span>?
          </h3>
          <img
            src="https://s3-alpha-sig.figma.com/img/3e12/a35f/4a9fb448a7efbb2aeb909b40f4d485f6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLJNFD8xIHbuIfHXHPoMvicLT2HYbvSK6C5kssf7SpMnMSidbAiJzyV0GwX9l1IheMFa1~4QVGxu3Ev-WSy~ryw1Ofj-S0eZEudnaTEfRLmw7OHYRyO1A2wFkB~hZGGhS2GR3bt1Mi9QKshySJOEFt~2FS9W28KusnT8GAkFZNb19cgms2pJj8dNkCEnUxlADweoeOJQLW90CzEa-6Y8gro0F-V2P9rwNkR4M7DMan~Z6EGLAJuC9D7zFGjUJGbs1Yz25yCZtxlmHLxhAVqcSkzVtZajm9c5-hF~38LP98IHcZccBtuahfRXyZ6t-jBhHK36maYR0PS2oF3j4d5acg__"
            alt="Example"
            className={styles.exampleImage}
          />
        </div>

        {/* Right Side Content */}
        <div className={styles.rightContent}>
          <h3>
            WHY <span className={styles.highLight}>YATRI</span>?
          </h3>
            <div className={styles.featureItem}>
              <Image
                src={flag}
                className={styles.featureImg}
                alt="Flag Icon"
                width={50}
                height={70}
              />
              <div className={styles.featureText}>
                <strong>FAST RESPONSE TIME</strong>
                <p>
                  Experience The Best Car Rental Service With Driver For Local
                  Or Outstation Trips. Enjoy Prompt Response Times And Seamless
                  Car Hire Service, Ensuring You Get On The Road Quickly.
                </p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Image
                src={people}
                className={styles.featureImg}
                alt="People Icon"
                width={70}
                height={70}
              />
              <div className={styles.featureText}>
                <strong>VAST FLEET</strong>
                <p>
                  We Offer A Wide Range Of Rental Cars Including Sedans, SUVs,
                  MIJVs, Premium Sedans, And Tempo Travellers To Meet All Your
                  Needs.
                </p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Image
                src={mobile}
                className={styles.featureImg}
                alt="Mobile Icon"
                width={60}
                height={70}
              />
              <div className={styles.featureText}>
                <strong>EASY TO ORDER</strong>
                <p>
                  Easily Book A Cab Online Through Our User-Friendly Website,
                  Mobile Application, Or By Calling Our Customer Support Team.
                </p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Image
                src={paid}
                className={styles.featureImg}
                alt="Payment Icon"
                width={70}
                height={70}
              />
              <div className={styles.featureText}>
                <strong>GREAT TARIFFS</strong>
                <p>
                  Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are
                  Highly Competitive Compared To Other Operators. Book Online
                  Cabs At The Best Prices With Yatri Car Rental.
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.tableSection}>
        <div className={styles.tableContainer}>
          {/* Column 1 */}
          <div className={styles.tableColumn}>
            <div className={styles.rowHeader}>CAR TYPE</div>
            <div className={styles.rowContent}>AC Sedans</div>
            <div className={styles.rowContent}>AC Hatchbacks</div>
            <div className={styles.rowContent}>AC SUV</div>
          </div>

          {/* Column 2 */}
          <div className={styles.tableColumn}>
            <div className={styles.rowHeader}>MODEL INCLUDES</div>
            <div className={styles.rowContent}>Etios, Amaze, Dzire etc.</div>
            <div className={styles.rowContent}>
              Wagon R, Celerio, Micra etc.
            </div>
            <div className={styles.rowContent}>Ertiga, Xylo etc.</div>
          </div>

          {/* Column 3 */}
          <div className={styles.tableColumn}>
            <div className={styles.rowHeader}>PASSENGERS</div>
            <div className={styles.rowContent}>4 Pax</div>
            <div className={styles.rowContent}>4 Pax</div>
            <div className={styles.rowContent}>6-7 Pax</div>
          </div>

          {/* Column 4 */}
          <div className={styles.tableColumn}>
            <div className={styles.rowHeader}>IDEAL FOR</div>
            <div className={styles.rowContent}>
              Comfortable trips with small families
            </div>
            <div className={styles.rowContent}>
              Budget trips over short distances
            </div>
            <div className={styles.rowContent}>
              Premium trips with large families
            </div>
          </div>

          {/* Column 5 */}
          <div className={styles.tableColumn}>
            <div className={styles.rowHeader}>FARE</div>
            <div className={styles.rowContent}>Rs.11/KM</div>
            <div className={styles.rowContent}>Rs.11/KM</div>
            <div className={styles.rowContent}>Rs.13/KM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
