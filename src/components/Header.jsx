import React from "react";
import { COLORS } from "../constants/colors";

const Header = ({ onNavigate, currentPage }) => (
  <header
    className="p-4 shadow-md flex flex-col md:flex-row items-center justify-between"
    style={{
      backgroundColor: COLORS.goldenYellowHands,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div
      className="text-2xl font-bold mb-2 md:mb-0 cursor-pointer flex items-center gap-2"
      onClick={() => onNavigate("home")}
    >
      <img
        src="public/JmSlogo.svg"
        alt="Jayness Foundation Logo"
        className="h-10 w-auto rounded-full"
      />
      <span>Jayness Foundation</span>
    </div>
    <nav className="flex flex-wrap gap-4 md:gap-6 text-lg">
      <a
        href="#"
        className={`hover:underline ${
          currentPage === "home" ? "font-bold" : ""
        }`}
        style={{
          color:
            currentPage === "home"
              ? COLORS.purpleHeart
              : COLORS.darkBlueTextOutline,
        }}
        onClick={() => onNavigate("home")}
      >
        Home
      </a>
      <a
        href="#"
        className={`hover:underline ${
          currentPage === "about" ? "font-bold" : ""
        }`}
        style={{
          color:
            currentPage === "about"
              ? COLORS.purpleHeart
              : COLORS.darkBlueTextOutline,
        }}
        onClick={() => onNavigate("about")}
      >
        About Us
      </a>
      <a
        href="#"
        className={`hover:underline ${
          currentPage === "campaigns" ? "font-bold" : ""
        }`}
        style={{
          color:
            currentPage === "campaigns"
              ? COLORS.purpleHeart
              : COLORS.darkBlueTextOutline,
        }}
        onClick={() => onNavigate("campaigns")}
      >
        Campaigns
      </a>
      <a
        href="#"
        className={`hover:underline ${
          currentPage === "impact" ? "font-bold" : ""
        }`}
        style={{
          color:
            currentPage === "impact"
              ? COLORS.purpleHeart
              : COLORS.darkBlueTextOutline,
        }}
        onClick={() => onNavigate("impact")}
      >
        Impact
      </a>
      <a
        href="#"
        className={`hover:underline ${
          currentPage === "get-involved" ? "font-bold" : ""
        }`}
        style={{
          color:
            currentPage === "get-involved"
              ? COLORS.purpleHeart
              : COLORS.darkBlueTextOutline,
        }}
        onClick={() => onNavigate("get-involved")}
      >
        Get Involved
      </a>
      <a
        href="#"
        className={`hover:underline ${
          currentPage === "contact" ? "font-bold" : ""
        }`}
        style={{
          color:
            currentPage === "contact"
              ? COLORS.purpleHeart
              : COLORS.darkBlueTextOutline,
        }}
        onClick={() => onNavigate("contact")}
      >
        Contact
      </a>
    </nav>
    <div className="flex items-center gap-4 mt-2 md:mt-0">
      <button
        className="px-4 py-2 rounded-md transition-colors"
        style={{
          backgroundColor: COLORS.darkBlueTextOutline,
          color: "white",
          "--tw-ring-color": COLORS.darkBlueTextOutline,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(41, 56, 122, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.darkBlueTextOutline)
        }
        onClick={() => onNavigate("login-register")}
      >
        Login/Register
      </button>
      <button
        className="px-4 py-2 rounded-md transition-colors"
        style={{
          backgroundColor: COLORS.purpleHeart,
          color: "white",
          "--tw-ring-color": COLORS.purpleHeart,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(128, 74, 194, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.purpleHeart)
        }
        onClick={() => onNavigate("donate")}
      >
        Donate
      </button>
      <select
        className="rounded-md p-2"
        style={{
          backgroundColor: COLORS.backgroundOffWhite,
          color: COLORS.darkBlueTextOutline,
        }}
      >
        <option>EN</option>
        <option>ES</option>
      </select>
    </div>
  </header>
);

export default Header;
