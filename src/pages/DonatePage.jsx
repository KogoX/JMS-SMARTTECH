import React from "react";
import { COLORS } from "../constants/colors";

const DonatePage = () => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-xl mx-auto p-8 rounded-lg shadow-xl text-center"
      style={{ borderTop: `4px solid ${COLORS.purpleHeart}` }}
    >
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.purpleHeart }}
      >
        Make a Difference: Donate Today!
      </h1>
      <p className="text-lg mb-8">
        Your generosity fuels our mission. Choose an amount or enter a custom
        one, and select your preferred payment method.
      </p>

      <h2
        className="text-3xl font-semibold mb-6"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Choose Your Donation Amount
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["25", "50", "100", "250", "500", "Other"].map((amount) => (
          <button
            key={amount}
            className="px-6 py-3 rounded-full border transition-colors"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              color: COLORS.oliveBranchLeaves,
              borderColor: COLORS.oliveBranchLeaves,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(66, 94, 134, 0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                COLORS.backgroundOffWhite)
            }
          >
            ${amount}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter custom amount (e.g., 75)"
        className="w-full p-3 border rounded-md mb-8 focus:ring-2 focus:outline-none"
        style={{
          borderColor: COLORS.oliveBranchLeaves,
          "--tw-ring-color": COLORS.oliveBranchLeaves,
        }}
      />

      <h2
        className="text-3xl font-semibold mb-6"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Select Payment Method
      </h2>
      <div className="flex justify-center gap-6 mb-8 text-5xl">
        <span>💳</span> {/* Card icon */}
        <span>📱</span> {/* Mobile money icon */}
        <span>🏦</span> {/* Bank icon */}
        <span> PayPal</span> {/* Adding text to the emoji for clarity */}
      </div>

      <button
        className="text-lg px-8 py-4 rounded-full shadow-md transition-colors w-full"
        style={{ backgroundColor: COLORS.purpleHeart, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(128, 74, 194, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.purpleHeart)
        }
      >
        Donate Securely Now
      </button>

      <p className="mt-8 text-sm" style={{ color: COLORS.darkBlueTextOutline }}>
        All donations are tax-deductible to the full extent of the law. Thank
        you for your support!
      </p>
    </div>
  </div>
);

export default DonatePage;
