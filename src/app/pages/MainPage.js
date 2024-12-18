"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrows from "../assets/arrows.png";
import styles from "./mainPage.module.css";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("Outstation"); // Default selected tab
  const [tripType, setTripType] = useState("OneWay"); // For Outstation Trip Type

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab !== "Outstation") setTripType("OneWay"); // Reset trip type for other tabs
  };

  return (
    <div className={styles.mainPage}>
      {/* Background Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="https://s3-alpha-sig.figma.com/img/d2d9/3c47/abf65e6a667c112ee138901c5ae357a3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9Zm~VBSElNOwZWG3JPT9uGkMRoiH4qvKuqWC7DFusM5uV3~Ymh3vScDNhkAvRpwnLbxrFmXJZjXSMEAWLv1SbZftp9r~H3-RyiY3oDH1dcNFvtsTMSW3jtxmBr9ymmxPFObRbOqKPGfFMWTKx89YvnYw6fSrvfdYhzJTMIAj1ghSAppqRqesCi-sz0Vie~eI9DQa17oEyJpEdSreqm4p0YOGT296~lvu025EVUFncNSyuzNVBJbNiiy8EDNKelZVN1tD32m1XpVeqzuGTlkzgLpi~qydPRqLegE2d6xQSIcqUf00FPLRIz1yfvLE0B3kbxFdsqASeUNUJi~Lye~ew__"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>

      {/* Left Section */}
      <div className={styles.leftSection}>
        <h1>
          INDIA'S{" "}
          <span className={styles.highlight}>LEADING ONE-WAY INTER-CITY</span>{" "}
          CAB SERVICE PROVIDER
        </h1>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.tabButtons}>
          <button
            className={`${styles.tab} ${
              activeTab === "Outstation" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("Outstation")}
          >
            Outstation
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "Local" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("Local")}
          >
            Local
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "Airport" ? styles.activeTab : ""
            }`}
            onClick={() => handleTabChange("Airport")}
          >
            Airport
          </button>
        </div>

        {/* Content */}
        <div className={styles.formContent}>
          {activeTab === "Outstation" && (
            <div>
              <div className={styles.tripType}>
                <button
                  className={`${styles.tripBtn} ${
                    tripType === "OneWay" ? styles.activeTripBtn : ""
                  }`}
                  onClick={() => setTripType("OneWay")}
                >
                  One Way
                </button>
                <button
                  className={`${styles.tripBtn} ${
                    tripType === "RoundTrip" ? styles.activeTripBtn : ""
                  }`}
                  onClick={() => setTripType("RoundTrip")}
                >
                  Round Trip
                </button>
              </div>
              <div className={styles.formGroup}>
                <input type="text" placeholder="From" />
                <Image
                  src={arrows}
                  alt="arrows"
                  className={styles.arrow}
                  width={40}
                ></Image>
                <input type="text" placeholder="To" />
                <label htmlFor="element-id" className={styles.inputLabel}>Pick Up Date</label><input
                  type="date"
                  className={styles.OutstationInput}
                  placeholder="Pick Up Date"
                />
                <label htmlFor="element-id" className={styles.inputLabel}>Return Date</label>{tripType === "RoundTrip" && (
                  <input
                    type="date"
                    className={styles.OutstationInput}
                    placeholder="Return Date"
                  />
                )}
                <label htmlFor="element-id" className={styles.inputLabel}>Pick Up At</label>
                <input
                  type="time"
                  className={styles.OutstationInput}
                  placeholder="Pick Up At"
                />
              </div>
            </div>
          )}

          {activeTab === "Local" && (
            <div className={styles.formGroup}>
              <input type="text" placeholder="Pickup City" />
              <input type="text" placeholder="Pick Up" />
              <input type="time" placeholder="Pick Up At" />
            </div>
          )}

          {activeTab === "Airport" && (
            <div className={styles.formGroup}>
              <input type="text" placeholder="From" />
              <input type="text" placeholder="Trip" />
              <input type="date" placeholder="Pick Up Date" />
              <input type="time" placeholder="Pick Up At" />
            </div>
          )}
          <div className={styles.expBtn}>
            <button className={styles.exploreBtn}>EXPLORE CABS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
