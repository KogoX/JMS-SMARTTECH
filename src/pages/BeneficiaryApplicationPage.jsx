import React from "react";
import { COLORS } from "../constants/colors";

const BeneficiaryApplicationPage = () => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-xl mx-auto p-8 rounded-lg shadow-xl text-center"
      style={{ borderTop: `4px solid ${COLORS.oliveBranchLeaves}` }}
    >
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.oliveBranchLeaves }}
      >
        Beneficiary Application
      </h1>
      <p className="text-lg mb-8">
        Please fill out the form below to apply for assistance from our
        programs. Ensure all information is accurate and complete.
      </p>

      <form className="space-y-6 text-left">
        <div>
          <label
            htmlFor="applicantName"
            className="block text-lg font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="applicantName"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label
            htmlFor="applicantEmail"
            className="block text-lg font-medium mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="applicantEmail"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label htmlFor="program" className="block text-lg font-medium mb-2">
            Program of Interest
          </label>
          <select
            id="program"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          >
            <option>Child and Orphan Support Program</option>
            <option>Women's Empowerment Hub</option>
            <option>Community Health Initiative</option>
            <option>Education and Literacy Drive</option>
            <option>Youth Empowerment and Innovation</option>
            <option>Environmental and Civic Engagement</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="reason" className="block text-lg font-medium mb-2">
            Reason for Application
          </label>
          <textarea
            id="reason"
            rows="5"
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
          Submit Application
        </button>
      </form>
      <p className="mt-6 text-sm" style={{ color: COLORS.darkBlueTextOutline }}>
        Our team will review your application and get back to you within 5-7
        business days.
      </p>
    </div>
  </div>
);

export default BeneficiaryApplicationPage;
