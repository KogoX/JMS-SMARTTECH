import React from "react";
import { COLORS } from "../constants/colors";

const VolunteerSignupPage = () => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-xl mx-auto p-8 rounded-lg shadow-xl text-center"
      style={{ borderTop: `4px solid ${COLORS.goldenYellowHands}` }}
    >
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.goldenYellowHands }}
      >
        Volunteer Sign-up
      </h1>
      <p className="text-lg mb-8">
        Join our dedicated team of volunteers and help us make a difference!
        Please fill out this form to get started.
      </p>

      <form className="space-y-6 text-left">
        <div>
          <label
            htmlFor="volunteerName"
            className="block text-lg font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="volunteerName"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label
            htmlFor="volunteerEmail"
            className="block text-lg font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="volunteerEmail"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label htmlFor="interests" className="block text-lg font-medium mb-2">
            Areas of Interest (e.g., Education, Healthcare, Admin)
          </label>
          <textarea
            id="interests"
            rows="3"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-8 py-4 rounded-full shadow-md transition-colors w-full"
          style={{ backgroundColor: COLORS.purpleHeart, color: "white" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(128, 74, 194, 0.8)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.purpleHeart)
          }
        >
          Submit Volunteer Application
        </button>
      </form>
      <p className="mt-6 text-sm" style={{ color: COLORS.darkBlueTextOutline }}>
        We will contact you shortly with opportunities that match your interests
        and availability.
      </p>
    </div>
  </div>
);

export default VolunteerSignupPage;
