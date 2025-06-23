import React from "react";
import { COLORS } from "../constants/colors";

const ContactPage = () => (
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
        Contact Us
      </h1>
      <p className="text-lg mb-8">
        We'd love to hear from you! Please fill out the form below or reach out
        using the contact details provided.
      </p>

      <form className="space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-lg font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full p-3 border rounded-md focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
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
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: COLORS.darkBlueTextOutline }}
        >
          Our Contact Details:
        </h2>
        <p className="text-md mb-2">
          <strong>Address:</strong> 123 Main Street, Anytown, AT 12345, Country
        </p>
        <p className="text-md mb-2">
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="text-md">
          <strong>Email:</strong> info@yourorg.org
        </p>
      </div>
    </div>
  </div>
);

export default ContactPage;
