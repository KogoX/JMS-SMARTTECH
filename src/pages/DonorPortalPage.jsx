import React from "react";
import { COLORS } from "../constants/colors";

const DonorPortalPage = () => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl text-center"
      style={{ borderTop: `4px solid ${COLORS.purpleHeart}` }}
    >
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.purpleHeart }}
      >
        Donor Portal
      </h1>
      <p className="text-lg mb-8">
        Welcome, Valued Donor! Here you can manage your donations, view your
        giving history, and update your personal information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div
          className="p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: COLORS.goldenYellowHands,
            color: COLORS.darkBlueTextOutline,
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">Your Giving History</h3>
          <p className="mb-4">
            View a detailed record of all your past contributions.
          </p>
          <button
            className="px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: COLORS.darkBlueTextOutline,
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(41, 56, 122, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                COLORS.darkBlueTextOutline)
            }
          >
            View History
          </button>
        </div>
        <div
          className="p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: COLORS.goldenYellowHands,
            color: COLORS.darkBlueTextOutline,
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Manage Recurring Gifts
          </h3>
          <p className="mb-4">
            Easily modify or cancel your recurring donations.
          </p>
          <button
            className="px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: COLORS.darkBlueTextOutline,
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(41, 56, 122, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                COLORS.darkBlueTextOutline)
            }
          >
            Manage Gifts
          </button>
        </div>
      </div>

      <button
        className="px-8 py-4 rounded-full transition-colors"
        style={{ backgroundColor: COLORS.oliveBranchLeaves, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(66, 94, 134, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.oliveBranchLeaves)
        }
      >
        Update Profile
      </button>
    </div>
  </div>
);

export default DonorPortalPage;
