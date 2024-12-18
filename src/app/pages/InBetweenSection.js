import React from "react";
import "./InBetweenSection.css";

const InBetweenSection = () => {
  return (
    <div className="billing-section">
      {/* Transparent Billing */}
      <div className="billing-item">
        <h2 className="billing-title">Transparent Billing</h2>
        <p className="billing-desc">GPS Based Billing | No Km Tampering</p>
      </div>

      {/* Download Now Section */}
      <div className="billing-item download-section">
        <h2 className="billing-title">Download Now!</h2>
        <div className="app-buttons">
          <img
            src="https://s3-alpha-sig.figma.com/img/1243/20d6/69dcad3bd99e35dbad37f5c2357a1b80?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPBOtv7FhooAddLB9xbok8tFfpp5nOSKD~FtgdnKojiEZZHA3ePvSwRSdWtUTdqF2YqckYhEm~wRVFternlfr~4nNhAeXWJP0Me6AOIe3wR6-sfnv8U6X5wkh0P7q3fxpw4gMZl5mtfdOGUTXETE34~-1qzypVyzbJ2gGP7gTJ3-L9X5IcbA5-cI-G~vPgFo2xKF6ehISRqB7aUQ9ymCp3fGMil~8Y7dll5RD51XNU4qBbYkGxfgZO~kHCc24VqdM5nUVJ5SzVKK876kEDH4H~LGKH57~mFwOH6sv~Fc74urDXiQLZFdLq4qqq-4tQFdyAMUz1Sike-G6mcvpRbXgg__"
            alt="Google Play"
            className="app-button"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/fef1/ff21/034a016396b76138718bd29c45c67d93?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KSrHAu6wRrL0Sx7eALqum4bTBJMarXd6v0n3ABow1bw~VKV9ABkKJkN3A8TiXX3wNYZVyU4WRilqahgPqjhA03qZvJSxMb5Wrn0xlD-b8yWLcOqw76EzzpjkH45K1QWGBUQ6GIIMf0JVSUAj-gX987z0d9bwANPeIAlshvPTJxItqERxeVj0bc8v~w00VOfurAV7gwBQ99x~zIaI9kpARdLAg-UYH1SB5JouJ7vn7v1mo2oYXsWyEDFMC9ADLtIH~qG0foIPYTqb6hRJO4T9FD5sTwhzj9PsO9rQqe2sHH-R8cLMA82L2ac1WVydrPnxz58s5KLPVrkD~7GRDCAyNg__"
            alt="App Store"
            className="app-button"
          />
        </div>
      </div>

      {/* No Return Fare */}
      <div className="billing-item">
        <h2 className="billing-title">No return fare</h2>
        <p className="billing-desc">One-Way cab fare | No hidden charges</p>
      </div>
    </div>
  );
};

export default InBetweenSection;
