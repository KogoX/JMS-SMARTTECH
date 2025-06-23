import React from "react";
import { COLORS } from "../constants/colors";

const AdminLoginPage = () => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-md mx-auto p-8 rounded-lg shadow-xl text-center"
      style={{ borderTop: `4px solid ${COLORS.darkBlueTextOutline}` }}
    >
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Admin Login
      </h1>
      <p className="text-lg mb-8">
        Authorized personnel only. Please enter your credentials to access the
        admin panel.
      </p>

      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
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
          Login to Admin Panel
        </button>
      </form>
    </div>
  </div>
);

export default AdminLoginPage;
