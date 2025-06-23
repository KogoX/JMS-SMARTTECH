import React from "react";
import { COLORS } from "../constants/colors";

const ImpactPage = ({ onNavigate }) => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: `rgba(41, 56, 122, 0.05)`,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.purpleHeart }}
      >
        Our Impact
      </h1>
      <p className="text-lg mb-8">
        We are proud to share the tangible results of our efforts and the
        incredible difference your support makes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div
          className="p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: COLORS.goldenYellowHands,
            color: COLORS.darkBlueTextOutline,
          }}
        >
          <h3 className="text-3xl font-bold mb-4">Lives Transformed</h3>
          <p
            className="text-2xl font-extrabold"
            style={{ color: COLORS.purpleHeart }}
          >
            12,345+
          </p>
          <p className="text-md">
            Individuals have directly benefited from our programs.
          </p>
        </div>
        <div
          className="p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: COLORS.goldenYellowHands,
            color: COLORS.darkBlueTextOutline,
          }}
        >
          <h3 className="text-3xl font-bold mb-4">Community Reach</h3>
          <p
            className="text-2xl font-extrabold"
            style={{ color: COLORS.purpleHeart }}
          >
            120+
          </p>
          <p className="text-md">
            Communities have been positively impacted by our initiatives.
          </p>
        </div>
      </div>

      <h2
        className="text-4xl font-bold mb-10"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Detailed Impact Reports
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="p-6 rounded-lg shadow-md border-l-4"
          style={{
            backgroundColor: COLORS.backgroundOffWhite,
            borderColor: COLORS.oliveBranchLeaves,
          }}
        >
          <h3 className="text-2xl font-semibold mb-2">Annual Report 2024</h3>
          <p className="mb-4">
            A comprehensive overview of our activities, financials, and
            achievements.
          </p>
          <button
            className="px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: COLORS.oliveBranchLeaves,
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(66, 94, 134, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.oliveBranchLeaves)
            }
          >
            Download Report (PDF)
          </button>
        </div>
        <div
          className="p-6 rounded-lg shadow-md border-l-4"
          style={{
            backgroundColor: COLORS.backgroundOffWhite,
            borderColor: COLORS.oliveBranchLeaves,
          }}
        >
          <h3 className="text-2xl font-semibold mb-2">
            Impact Stories Collection
          </h3>
          <p className="mb-4">
            Read personal stories from beneficiaries and volunteers.
          </p>
          <button
            className="px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: COLORS.oliveBranchLeaves,
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(66, 94, 134, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.oliveBranchLeaves)
            }
            onClick={() => onNavigate("testimonials")}
          >
            View Stories
          </button>
        </div>
      </div>
      <button
        className="px-8 py-4 rounded-full transition-colors mt-10"
        style={{ backgroundColor: COLORS.purpleHeart, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(128, 74, 194, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.purpleHeart)
        }
        onClick={() => onNavigate("donate")}
      >
        Support Our Work
      </button>
    </div>
  </div>
);

export default ImpactPage;
