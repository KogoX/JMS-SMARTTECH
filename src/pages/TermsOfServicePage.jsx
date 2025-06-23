import React from "react";
import LegalPage from "./LegalPage";
import { COLORS } from "../constants/colors";

const TermsOfServicePage = () => (
  <LegalPage
    title="Terms of Service"
    content={
      <>
        <p>
          Welcome to Jayness Foundation. These Terms of Service ("Terms") govern
          your access to and use of Jayness Foundation's website, products, and
          services ("Services").
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">
          Acceptance of Terms
        </h2>
        <p>
          By accessing or using our Services, you agree to be bound by these
          Terms and by our Privacy Policy. If you do not agree to these Terms,
          do not use our Services.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">Use of Services</h2>
        <p>
          You agree to use our Services only for lawful purposes and in a way
          that does not infringe the rights of, restrict or inhibit anyone
          else's use and enjoyment of the Services.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">
          Intellectual Property
        </h2>
        <p>
          All content and materials available on the Services, including but not
          limited to text, graphics, website name, code, images and logos are
          the intellectual property of Jayness Foundation and are protected by
          applicable copyright and trademark law.
        </p>
        <p
          className="mt-6 text-sm italic"
          style={{ color: COLORS.oliveBranchLeaves }}
        >
          Last updated: June 19, 2025
        </p>
      </>
    }
  />
);

export default TermsOfServicePage;
