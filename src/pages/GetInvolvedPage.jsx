import React from "react";
import { COLORS } from "../constants/colors";

const GetInvolvedPage = ({ onNavigate }) => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: `rgba(66, 94, 134, 0.1)`,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.purpleHeart }}
      >
        Get Involved
      </h1>
      <p className="text-lg mb-8">
        There are many ways you can join our mission and contribute to a better
        world. Choose the path that's right for you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div
          className="p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: COLORS.backgroundOffWhite,
            borderColor: COLORS.oliveBranchLeaves,
            borderBottom: `4px solid ${COLORS.oliveBranchLeaves}`,
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">Donate</h3>
          <p className="mb-4">
            Your financial contribution directly funds our vital programs.
          </p>
          <button
            className="px-6 py-3 rounded-full transition-colors"
            style={{ backgroundColor: COLORS.purpleHeart, color: "white" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(128, 74, 194, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.purpleHeart)
            }
            onClick={() => onNavigate("donate")}
          >
            Make a Donation
          </button>
        </div>
        <div
          className="p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: COLORS.backgroundOffWhite,
            borderColor: COLORS.goldenYellowHands,
            borderBottom: `4px solid ${COLORS.goldenYellowHands}`,
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
          <p className="mb-4">
            Lend your time and skills to support our on-the-ground efforts.
          </p>
          <button
            className="px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: COLORS.goldenYellowHands,
              color: COLORS.darkBlueTextOutline,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(240, 176, 49, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.goldenYellowHands)
            }
            onClick={() => onNavigate("volunteer-signup")}
          >
            Sign Up to Volunteer
          </button>
        </div>
        <div
          className="p-6 rounded-lg shadow-md"
          style={{
            backgroundColor: COLORS.backgroundOffWhite,
            borderColor: COLORS.darkBlueTextOutline,
            borderBottom: `4px solid ${COLORS.darkBlueTextOutline}`,
          }}
        >
          <h3 className="text-2xl font-semibold mb-4">Partner with Us</h3>
          <p className="mb-4">
            Explore corporate partnerships or institutional collaborations.
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
            onClick={() => onNavigate("contact")}
          >
            Become a Partner
          </button>
        </div>
      </div>

      <h2
        className="text-3xl font-semibold mb-6"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Other Ways to Help
      </h2>
      <ul className="list-disc list-inside text-left max-w-2xl mx-auto text-lg mb-8">
        <li>Share our campaigns on social media.</li>
        <li>Organize a fundraising event in your community.</li>
        <li>Subscribe to our newsletter for updates and calls to action.</li>
        <li>Leave a legacy gift to support future generations.</li>
      </ul>

      <button
        className="px-8 py-4 rounded-full transition-colors"
        style={{ backgroundColor: COLORS.oliveBranchLeaves, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(66, 94, 134, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.oliveBranchLeaves)
        }
        onClick={() => onNavigate("contact")}
      >
        Contact Us for More Info
      </button>
    </div>
  </div>
);

export default GetInvolvedPage;
