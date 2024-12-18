import React from 'react';
import Image from 'next/image';
import styles from './blog2Page.module.css';

const Blog1Page = () => {
  return (
    <div className={styles.blog1Page}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>WHY CHOOSE YATRI CAR RENTAL?</h1>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        <p>
          <strong>•</strong> Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi
          services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience,
          and we take great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident
          across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in INDIA.
        </p>
        <p>
          <strong>• Service You Can Trust - </strong> At Yatri Car Rental, we are dedicated to providing dependable services in INDIA.
          We guarantee that we won't cancel any bookings without advance notification, and our rental cars are meticulously
          maintained to ensure a seamless and stress-free journey for our clients.
        </p>
        <p>
          <strong>• Safety is Our Priority - </strong> Safety and comfort are paramount at Yatri Car Rental in INDIA. We exclusively hire
          experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers
          are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for
          passengers.
        </p>
        <p>
          <strong>• Expert Chauffeurs at Your Service - </strong> Yatri Car Rental takes pride in selecting only the most skilled,
          knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients.
        </p>
        <p>
          <strong>• Extensive Industry Experience - </strong> With over 10 years of industry expertise, Yatri Car Rental is your go-to
          choice for premium car hire services.
        </p>
        <p>
          <strong>• Proven Track Record -</strong> We place a strong emphasis on transparency in our billing system and consistently
          strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and
          satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher.
        </p>
      </div>

    </div>
  );
};

export default Blog1Page;