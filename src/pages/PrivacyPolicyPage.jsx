import React from "react";
import LegalPage from "./LegalPage";
import { COLORS } from "../constants/colors";

const PrivacyPolicyPage = () => (
  <LegalPage
    title="Privacy Policy"
    content={
      <>
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">
          Information We Collect
        </h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the website, express an interest in obtaining
          information about us or our products and services, when you
          participate in activities on the website (such as posting messages in
          our forums or entering contests), or otherwise when you contact us.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p>
          We may use the information we collect from you to personalize your
          experience, to improve our website, to process transactions, and to
          send periodic emails regarding your orders or other products and
          services.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4">
          Sharing Your Information
        </h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information unless we provide you with advance
          notice.
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

export default PrivacyPolicyPage;
