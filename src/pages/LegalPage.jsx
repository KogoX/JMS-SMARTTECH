import React from "react";
import { COLORS } from "../constants/colors";

const LegalPage = ({ title, content }) => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl"
      style={{ borderTop: `4px solid ${COLORS.purpleHeart}` }}
    >
      <h1
        className="text-5xl font-bold mb-8 text-center"
        style={{ color: COLORS.purpleHeart }}
      >
        {title}
      </h1>
      <div
        className="prose max-w-none"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        {content}
      </div>
    </div>
  </div>
);

export default LegalPage;
