import React from "react";
import { COLORS } from "../constants/colors";

const LoginRegisterPage = () => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="max-w-md mx-auto p-8 rounded-lg shadow-xl text-center"
      style={{ borderTop: `4px solid ${COLORS.goldenYellowHands}` }}
    >
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.goldenYellowHands }}
      >
        Login / Register
      </h1>
      <p className="text-lg mb-8">
        Access your account or create a new one to manage your donations,
        applications, or volunteer profile.
      </p>

      {/* Login Form */}
      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Login
      </h2>
      <form className="space-y-6 mb-10">
        <div>
          <input
            type="email"
            placeholder="Email Address"
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
          Login
        </button>
        <p className="text-sm mt-2">
          <a
            href="#"
            className="hover:underline"
            style={{ color: COLORS.oliveBranchLeaves }}
          >
            Forgot Password?
          </a>
        </p>
      </form>

      {/* Register Section */}
      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        New User? Register!
      </h2>
      <p className="mb-6">
        Create an account to track your impact, manage your preferences, and
        more.
      </p>
      <button
        className="px-8 py-4 rounded-full shadow-md transition-colors w-full"
        style={{ backgroundColor: COLORS.darkBlueTextOutline, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(41, 56, 122, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.darkBlueTextOutline)
        }
      >
        Create Account
      </button>
    </div>
  </div>
);

export default LoginRegisterPage;
