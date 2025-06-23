import React from "react";
import { COLORS } from "../constants/colors";

const CampaignDetailPage = ({ campaignName }) => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl text-center"
      style={{ borderTop: `4px solid ${COLORS.oliveBranchLeaves}` }}
    >
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.oliveBranchLeaves }}
      >
        Campaign: {campaignName || "Our Special Campaign"}
      </h1>
      <img
        src="https://placehold.co/800x450/FBF7F1/425E86?text=Detailed+Campaign+Image"
        alt={campaignName}
        className="w-full h-64 object-cover rounded-md mb-8"
      />
      <p className="text-lg mb-6">
        This page provides a deeper dive into the **
        {campaignName || "Our Special Campaign"}**. Here you will find detailed
        information about its goals, progress, and the lives it impacts.
      </p>

      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Our Goals
      </h2>
      <ul className="list-disc list-inside text-left mx-auto max-w-2xl text-lg mb-6">
        <li>Goal 1: Detailed explanation of the first goal.</li>
        <li>Goal 2: Detailed explanation of the second goal.</li>
        <li>Goal 3: Detailed explanation of the third goal.</li>
      </ul>

      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Current Progress
      </h2>
      <div
        className="w-full rounded-full h-4 mb-4 mx-auto max-w-2xl"
        style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
      >
        <div
          className="h-4 rounded-full"
          style={{ width: "80%", backgroundColor: COLORS.oliveBranchLeaves }}
        ></div>
      </div>
      <p
        className="text-xl font-bold mb-8"
        style={{ color: COLORS.oliveBranchLeaves }}
      >
        80% Funded - We're almost there!
      </p>

      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        How Your Donation Helps
      </h2>
      <p className="text-lg mb-6">
        Every contribution, no matter how small, brings us closer to achieving
        our objectives. For example, $[X] can provide [specific impact].
      </p>

      <button
        className="text-lg px-8 py-4 rounded-full shadow-md transition-colors"
        style={{ backgroundColor: COLORS.purpleHeart, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(128, 74, 194, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.purpleHeart)
        }
        onClick={() => onNavigate("donate")}
      >
        Support This Campaign
      </button>
    </div>
  </div>
);

export default CampaignDetailPage;
