import React from "react";
import { COLORS } from "../constants/colors";

const AboutUsPage = ({ onNavigate }) => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: COLORS.backgroundOffWhite,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.purpleHeart }}
      >
        About Us
      </h1>
      <p className="text-lg mb-6">
        Welcome to Jayness Foundation! We are a non-profit organization
        dedicated to advancing the welfare of marginalized and underserved
        populations, with a focus on women, children, the sick, persons with
        disabilities, the elderly, and low-income families. My name is Agnes
        Wanjiru, a Kenyan citizen, a devoted mother, and a passionate community
        development advocate. I currently serve as a cashier and barista at
        Clarah's Cafe and am inspired by the struggles and resilience of those
        in my community. Having grown up in a humble background, I have
        experienced firsthand the challenges that come with limited access to
        basic services. This inspired me to establish a CBO that promotes
        inclusive growth and empowers those left behind.
      </p>
      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Our Mission
      </h2>
      <p className="text-md mb-6">
        To empower vulnerable and marginalized community members by delivering
        life-changing services in education, health, economic empowerment, and
        advocacy. We believe in empowering communities and fostering long-term
        solutions to global challenges.
      </p>
      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Our Vision
      </h2>
      <p className="text-md mb-6">
        A just, resilient, and inclusive community where every individual can
        realize their potential and contribute meaningfully to society. where
        every individual has the opportunity to thrive and contribute to a just
        and equitable society.
      </p>
      <h2
        className="text-3xl font-semibold mb-4"
        style={{ color: COLORS.darkBlueTextOutline }}
      >
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {[
          {
            name: "Agnes Wanjiru",
            role: "Founder, and Executive Director",
            img: "https://placehold.co/150x150/FBF7F1/425E86?text=AW",
          },
          {
            name: "Alice Johnson",
            role: "Executive Director",
            img: "https://placehold.co/150x150/FBF7F1/425E86?text=AJ",
          },
          {
            name: "Mercy Jepkemboi",
            role: "Programs Manager",
            img: "https://placehold.co/150x150/FBF7F1/425E86?text=BW",
          },
          {
            name: "Laurence Koech",
            role: "Finance Lead",
            img: "https://placehold.co/150x150/FBF7F1/425E86?text=CD",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-md"
            style={{
              backgroundColor: COLORS.goldenYellowHands,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img src={member.img} alt={member.name} className="rounded-full" />
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
          </div>
        ))}
      </div>
      <button
        className="px-6 py-3 rounded-full transition-colors"
        style={{ backgroundColor: COLORS.oliveBranchLeaves, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(66, 94, 134, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.oliveBranchLeaves)
        }
        onClick={() => onNavigate("contact")}
      >
        Contact Us
      </button>
    </div>
  </div>
);

export default AboutUsPage;
