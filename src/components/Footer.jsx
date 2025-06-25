import React from "react";
import { COLORS } from "../constants/colors";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = ({ onNavigate }) => (
  <footer
    className="py-12 px-4"
    style={{ backgroundColor: COLORS.purpleHeart, color: "white" }}
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Column 1: Logo & Mission Snippet */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Jayness Foundation</h3>
        <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          "Stronger Together: Empowering Lives, Building Futures."
        </p>
      </div>
      {/* Column 2: Quick Links */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          <li>
            <a
              href="#"
              className="hover:underline"
              style={{ color: "inherit" }}
              onClick={() => onNavigate("about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
              style={{ color: "inherit" }}
              onClick={() => onNavigate("campaigns")}
            >
              Our Campaigns
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
              style={{ color: "inherit" }}
              onClick={() => onNavigate("impact")}
            >
              Impact Report
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
              style={{ color: "inherit" }}
              onClick={() => onNavigate("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Column 3: Legal & Security */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Legal & Security</h4>
        <ul className="space-y-2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          <li>
            <a
              href="#"
              className="hover:underline"
              style={{ color: "inherit" }}
              onClick={() => onNavigate("privacy-policy")}
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
              style={{ color: "inherit" }}
              onClick={() => onNavigate("terms-of-service")}
            >
              Terms of Service
            </a>
          </li>
        </ul>
        <div className="mt-4 flex gap-2">
          {/* Placeholder for security badges */}
          <img
            src="https://placehold.co/60x30/804AC2/FFFFFF?text=SSL"
            alt="SSL Badge"
            className="rounded-md"
          />
          <img
            src="https://placehold.co/60x30/804AC2/FFFFFF?text=Charity"
            alt="Charity Badge"
            className="rounded-md"
          />
        </div>
      </div>
      {/* Column 4: Connect With Us */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
        <p className="mb-2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          30100 Ronald Ngala St, Eldoret, Kenya
        </p>
        <p className="mb-2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          Phone: +254 793 779 358
        </p>
        <p className="mb-4" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          Email: info@jaynessfoundation.org
        </p>
        <div className="flex gap-4 text-2xl">
          {/* Placeholder social media icons */}
          <a
            href="#"
            className="hover:text-purple-300"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            <FaFacebook />
          </a>{" "}
          {/* Facebook */}
          <a
            href="#"
            className="hover:text-purple-300"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            <BsTwitterX />
          </a>{" "}
          {/* Twitter */}
          <a
            href="#"
            className="hover:text-purple-300"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            <FaInstagram />
          </a>{" "}
          {/* Instagram */}
          <a
            href="#"
            className="hover:text-purple-300"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            <FaYoutube />
          </a>{" "}
          {/* YouTube */}
          <a
            href="#"
            className="hover:text-purple-300"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            <FaLinkedin />
          </a>{" "}
          {/* Linkdin */}
        </div>
      </div>
    </div>
    <div
      className="border-t mt-8 pt-6 text-center text-sm"
      style={{
        borderColor: "rgba(255, 255, 255, 0.2)",
        color: "rgba(255, 255, 255, 0.6)",
      }}
    >
      © 2025 Jayness Foundation. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
