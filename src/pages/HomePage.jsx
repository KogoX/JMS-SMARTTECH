import React from "react";
import { COLORS } from "../constants/colors";

const HomePage = ({ onNavigate }) => (
  <>
    {/* Removed pt-20 as the header is no longer fixed */}
    <div>
      {/* Hero Section (Purple Heart) - Banner, mission statement, primary CTAs, impact video */}
      <div class="relative w-full h-96">
        <img
          src="public/heroimage.png"
          alt="Hero Image"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Our Site
          </h1>
          <p class="text-lg md:text-xl text-white">Your tagline goes here.</p>
        </div>
      </div>
      {/* Quick Donation Widget (Olive Branch Leaves) - Amount selection, payment methods, mobile money */}
      <section
        className="py-12 px-4"
        style={{ backgroundColor: COLORS.oliveBranchLeaves, color: "white" }}
      >
        <div
          className="max-w-xl mx-auto p-8 rounded-lg shadow-xl text-center"
          style={{
            backgroundColor: COLORS.backgroundOffWhite,
            borderTop: `4px solid ${COLORS.darkBlueTextOutline}`,
            color: COLORS.darkBlueTextOutline,
          }}
        >
          <h2 className="text-3xl font-bold mb-6">Make a Quick Donation</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["25", "50", "100", "Other"].map((amount) => (
              <button
                key={amount}
                className="px-6 py-3 rounded-full border transition-colors"
                style={{
                  backgroundColor: COLORS.backgroundOffWhite,
                  color: COLORS.oliveBranchLeaves,
                  borderColor: COLORS.oliveBranchLeaves,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(66, 94, 134, 0.1)")
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
            placeholder="Enter custom amount"
            className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:outline-none"
            style={{
              borderColor: COLORS.oliveBranchLeaves,
              "--tw-ring-color": COLORS.oliveBranchLeaves,
            }}
          />
          <p
            className="mb-4 text-sm"
            style={{ color: COLORS.darkBlueTextOutline }}
          >
            Payment Methods:
          </p>
          <div className="flex justify-center gap-6 mb-6 text-4xl">
            <span>💳</span> {/* Card icon */}
            <span>📱</span> {/* Mobile money icon */}
            <span>🏦</span> {/* Bank icon */}
          </div>
          <button
            className="text-lg px-8 py-4 rounded-full shadow-md transition-colors w-full"
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
            Donate Securely Now
          </button>
        </div>
      </section>

      {/* Impact Dashboard (Dark Blue Text & Outline) - Live statistics and counters */}
      <section
        className="py-16 px-4 text-center"
        style={{ backgroundColor: COLORS.darkBlueTextOutline, color: "white" }}
      >
        <h2 className="text-4xl font-bold mb-10">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div
            className="p-8 rounded-lg shadow-md border-b-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.goldenYellowHands,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <div
              className="text-5xl font-extrabold mb-2"
              style={{ color: COLORS.goldenYellowHands }}
            >
              1,234+
            </div>
            <p className="text-xl">Lives Impacted</p>
          </div>
          <div
            className="p-8 rounded-lg shadow-md border-b-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.goldenYellowHands,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <div
              className="text-5xl font-extrabold mb-2"
              style={{ color: COLORS.goldenYellowHands }}
            >
              5,678+
            </div>
            <p className="text-xl">Meals Provided</p>
          </div>
          <div
            className="p-8 rounded-lg shadow-md border-b-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.goldenYellowHands,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <div
              className="text-5xl font-extrabold mb-2"
              style={{ color: COLORS.goldenYellowHands }}
            >
              $987,654
            </div>
            <p className="text-xl">Funds Raised</p>
          </div>
          <div
            className="p-8 rounded-lg shadow-md border-b-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.goldenYellowHands,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <div
              className="text-5xl font-extrabold mb-2"
              style={{ color: COLORS.goldenYellowHands }}
            >
              123+
            </div>
            <p className="text-xl">Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Featured Campaigns (Olive Branch Leaves) - Current active campaigns with progress tracking */}
      <section
        className="py-16 px-4"
        style={{
          backgroundColor: `rgba(66, 94, 134, 0.1)`,
          color: COLORS.darkBlueTextOutline,
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Current Featured Campaigns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Campaign Card 1 */}
          <div
            className="p-6 rounded-lg shadow-md border-t-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img
              src="https://placehold.co/400x250/FBF7F1/425E86?text=Child+Support+Campaign"
              alt="Child and Orphan Support Program"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Child and Orphan Support Program
            </h3>
            <p className="mb-4">
              Providing safe shelter and feeding programs, school uniform,
              shoes, books, and tuition support, including after-school arts,
              music, and tutoring.
            </p>
            <div
              className="w-full rounded-full h-2.5 mb-2"
              style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
            >
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: "75%",
                  backgroundColor: COLORS.oliveBranchLeaves,
                }}
              ></div>
            </div>
            <p className="text-sm" style={{ color: COLORS.oliveBranchLeaves }}>
              75% Funded
            </p>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
                style={{
                  backgroundColor: COLORS.oliveBranchLeaves,
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(66, 94, 134, 0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    COLORS.oliveBranchLeaves)
                }
                onClick={() =>
                  onNavigate("campaign-detail", {
                    campaignName: "Child and Orphan Support Program",
                  })
                }
              >
                Learn More
              </button>
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
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
                Donate
              </button>
            </div>
          </div>
          {/* Campaign Card 2 */}
          <div
            className="p-6 rounded-lg shadow-md border-t-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img
              src="https://placehold.co/400x250/FBF7F1/425E86?text=Women+Empowerment+Campaign"
              alt="Women's Empowerment Hub"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Women's Empowerment Hub
            </h3>
            <p className="mb-4">
              Providing business and vocational training, legal clinics, GBV
              survivor support, and formation of cooperative groups for savings
              and credit.
            </p>
            <div
              className="w-full rounded-full h-2.5 mb-2"
              style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
            >
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: "60%",
                  backgroundColor: COLORS.oliveBranchLeaves,
                }}
              ></div>
            </div>
            <p className="text-sm" style={{ color: COLORS.oliveBranchLeaves }}>
              60% Funded
            </p>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
                style={{
                  backgroundColor: COLORS.oliveBranchLeaves,
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(66, 94, 134, 0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    COLORS.oliveBranchLeaves)
                }
                onClick={() =>
                  onNavigate("campaign-detail", {
                    campaignName: "Women's Empowerment Hub",
                  })
                }
              >
                Learn More
              </button>
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
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
                Donate
              </button>
            </div>
          </div>
          {/* Campaign Card 3 */}
          <div
            className="p-6 rounded-lg shadow-md border-t-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img
              src="https://placehold.co/400x250/FBF7F1/425E86?text=Healthcare+Campaign"
              alt="Community Health Initiative"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Community Health Initiative
            </h3>
            <p className="mb-4">
              Organizing annual medical camps, mobile clinics, immunizations,
              deworming, and nutrition education, alongside water and sanitation
              projects (e.g., boreholes, toilets).
            </p>
            <div
              className="w-full rounded-full h-2.5 mb-2"
              style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
            >
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: "90%",
                  backgroundColor: COLORS.oliveBranchLeaves,
                }}
              ></div>
            </div>
            <p className="text-sm" style={{ color: COLORS.oliveBranchLeaves }}>
              90% Funded
            </p>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
                style={{
                  backgroundColor: COLORS.oliveBranchLeaves,
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(66, 94, 134, 0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    COLORS.oliveBranchLeaves)
                }
                onClick={() =>
                  onNavigate("campaign-detail", {
                    campaignName: "Community Health Initiative",
                  })
                }
              >
                Learn More
              </button>
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
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
                Donate
              </button>
            </div>
          </div>
          {/* Campaign Card 4 */}
          <div
            className="p-6 rounded-lg shadow-md border-t-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img
              src="https://placehold.co/400x250/FBF7F1/425E86?text=Education+Campaign"
              alt="Education and Literacy Drive"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Education and Literacy Drive
            </h3>
            <p className="mb-4">
              Providing scholarships for high-performing students, adult
              education classes (literacy, numeracy, digital skills), and
              partnering with schools to improve infrastructure.
            </p>
            <div
              className="w-full rounded-full h-2.5 mb-2"
              style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
            >
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: "80%",
                  backgroundColor: COLORS.oliveBranchLeaves,
                }}
              ></div>
            </div>
            <p className="text-sm" style={{ color: COLORS.oliveBranchLeaves }}>
              80% Funded
            </p>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
                style={{
                  backgroundColor: COLORS.oliveBranchLeaves,
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(66, 94, 134, 0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    COLORS.oliveBranchLeaves)
                }
                onClick={() =>
                  onNavigate("campaign-detail", {
                    campaignName: "Education and Literacy Drive",
                  })
                }
              >
                Learn More
              </button>
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
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
                Donate
              </button>
            </div>
          </div>
          {/* Campaign Card 5 */}
          <div
            className="p-6 rounded-lg shadow-md border-t-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img
              src="https://placehold.co/400x250/FBF7F1/425E86?text=Youth+Campaign"
              alt="Youth Empowerment and Innovation"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Youth Empowerment and Innovation
            </h3>
            <p className="mb-4">
              Offering ICT training, coding bootcamps, talent showcases (dance,
              music, art), and mentorship and peer support groups.
            </p>
            <div
              className="w-full rounded-full h-2.5 mb-2"
              style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
            >
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: "70%",
                  backgroundColor: COLORS.oliveBranchLeaves,
                }}
              ></div>
            </div>
            <p className="text-sm" style={{ color: COLORS.oliveBranchLeaves }}>
              70% Funded
            </p>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
                style={{
                  backgroundColor: COLORS.oliveBranchLeaves,
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(66, 94, 134, 0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    COLORS.oliveBranchLeaves)
                }
                onClick={() =>
                  onNavigate("campaign-detail", {
                    campaignName: "Youth Empowerment and Innovation",
                  })
                }
              >
                Learn More
              </button>
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
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
                Donate
              </button>
            </div>
          </div>
          {/* Campaign Card 6 */}
          <div
            className="p-6 rounded-lg shadow-md border-t-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img
              src="https://placehold.co/400x250/FBF7F1/425E86?text=Environment+Campaign"
              alt="Environmental and Civic Engagement"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Environmental and Civic Engagement
            </h3>
            <p className="mb-4">
              Organizing monthly clean-up and tree-planting campaigns, awareness
              campaigns on civic rights and responsibilities, and disaster
              preparedness and climate resilience forums.
            </p>
            <div
              className="w-full rounded-full h-2.5 mb-2"
              style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
            >
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: "55%",
                  backgroundColor: COLORS.oliveBranchLeaves,
                }}
              ></div>
            </div>
            <p className="text-sm" style={{ color: COLORS.oliveBranchLeaves }}>
              55% Funded
            </p>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
                style={{
                  backgroundColor: COLORS.oliveBranchLeaves,
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(66, 94, 134, 0.8)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    COLORS.oliveBranchLeaves)
                }
                onClick={() =>
                  onNavigate("campaign-detail", {
                    campaignName: "Environmental and Civic Engagement",
                  })
                }
              >
                Learn More
              </button>
              <button
                className="px-6 py-3 rounded-full transition-colors flex-1"
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
                Donate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Olive Branch Leaves Lighter) - Donor and beneficiary stories with ratings */}
      <section
        className="py-16 px-4"
        style={{
          backgroundColor: `rgba(66, 94, 134, 0.05)`,
          color: COLORS.darkBlueTextOutline,
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Voices of Hope: Hear Our Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial Card 1 */}
          <div
            className="p-6 rounded-lg shadow-md border-l-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
            }}
          >
            <p className="italic text-lg mb-4">
              "Donating to this organization has been incredibly fulfilling.
              Their transparency and impact are truly inspiring."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://placehold.co/50x50/FBF7F1/425E86?text=D"
                alt="Donor 1"
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p
                  className="text-sm"
                  style={{ color: COLORS.oliveBranchLeaves }}
                >
                  Donor
                </p>
                <div style={{ color: COLORS.goldenYellowHands }}>★★★★★</div>
              </div>
            </div>
          </div>
          {/* Testimonial Card 2 */}
          <div
            className="p-6 rounded-lg shadow-md border-l-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
            }}
          >
            <p className="italic text-lg mb-4">
              "Thanks to their support, my children can now go to school. They
              changed our lives."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://placehold.co/50x50/FBF7F1/425E86?text=B"
                alt="Beneficiary 1"
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">John Smith</p>
                <p
                  className="text-sm"
                  style={{ color: COLORS.oliveBranchLeaves }}
                >
                  Beneficiary
                </p>
                <div style={{ color: COLORS.goldenYellowHands }}>★★★★★</div>
              </div>
            </div>
          </div>
          {/* Testimonial Card 3 */}
          <div
            className="p-6 rounded-lg shadow-md border-l-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
            }}
          >
            <p className="italic text-lg mb-4">
              "The team's dedication is unparalleled. Proud to support such a
              committed group."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://placehold.co/50x50/FBF7F1/425E86?text=V"
                alt="Volunteer 1"
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">Emily White</p>
                <p
                  className="text-sm"
                  style={{ color: COLORS.oliveBranchLeaves }}
                >
                  Volunteer
                </p>
                <div style={{ color: COLORS.goldenYellowHands }}>★★★★☆</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            className="px-8 py-4 rounded-full transition-colors"
            style={{
              backgroundColor: COLORS.oliveBranchLeaves,
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(66, 94, 134, 0.8)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.oliveBranchLeaves)
            }
            onClick={() => onNavigate("testimonials")}
          >
            Read More Stories
          </button>
        </div>
      </section>

      {/* About Organization (Olive Branch Leaves Lighter) - Mission, vision, team, achievements */}
      <section
        className="py-16 px-4"
        style={{
          backgroundColor: `rgba(66, 94, 134, 0.2)`,
          color: COLORS.darkBlueTextOutline,
        }}
      >
        <h2 className="text-4xl font-bold mb-6">About Our Organization</h2>
        <div className="max-w-4xl mx-auto text-lg leading-relaxed">
          <p className="mb-4">
            We are dedicated to empowering vulnerable and marginalized community
            members by delivering life-changing services in education, health,
            economic empowerment, and advocacy, working tirelessly to create a
            lasting positive impact in our community. Our vision is a just,
            resilient, and inclusive community where every individual can
            realize their potential and contribute meaningfully to society.
          </p>
          <p className="mb-6">
            With a passionate team and transparent operations, we strive for
            excellence in every project.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
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
            onClick={() => onNavigate("about")}
          >
            Our Mission & Vision
          </button>
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
            onClick={() => onNavigate("about")}
          >
            Meet Our Team
          </button>
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
            onClick={() => onNavigate("about")}
          >
            Our Achievements
          </button>
        </div>
      </section>

      {/* User Access Portals (Golden Yellow Hands) - Entry points for different user types */}
      <section
        className="py-16 px-4 text-center"
        style={{
          backgroundColor: COLORS.goldenYellowHands,
          color: COLORS.darkBlueTextOutline,
        }}
      >
        <h2 className="text-4xl font-bold mb-8">Access Your Portal</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
          <button
            className="text-lg px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
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
            onClick={() => onNavigate("donor-portal")}
          >
            Donor Portal
          </button>
          <button
            className="text-lg px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
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
            onClick={() => onNavigate("beneficiary-application")}
          >
            Beneficiary Application
          </button>
          <button
            className="text-lg px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105"
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
            onClick={() => onNavigate("volunteer-signup")}
          >
            Volunteer Sign-up
          </button>
          <a
            href="#"
            className="hover:underline mt-4 sm:mt-0 sm:self-center"
            style={{ color: COLORS.darkBlueTextOutline }}
            onClick={() => onNavigate("admin-login")}
          >
            Admin Login
          </a>
        </div>
      </section>

      {/* Newsletter Signup (Olive Branch Leaves) - Email capture with preferences */}
      <section
        className="py-16 px-4"
        style={{
          backgroundColor: `rgba(66, 94, 134, 0.15)`,
          color: COLORS.darkBlueTextOutline,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with Our Work
          </h2>
          <p className="mb-6 text-lg">
            Receive our latest news, impact stories, and ways you can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-3 border rounded-md focus:ring-2 focus:outline-none"
              style={{
                borderColor: COLORS.oliveBranchLeaves,
                "--tw-ring-color": COLORS.oliveBranchLeaves,
              }}
            />
            <button
              className="px-8 py-3 rounded-md transition-colors"
              style={{
                backgroundColor: COLORS.oliveBranchLeaves,
                color: "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(66, 94, 134, 0.8)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  COLORS.oliveBranchLeaves)
              }
            >
              Subscribe
            </button>
          </div>
          <div className="text-sm">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox rounded"
                style={{ color: COLORS.oliveBranchLeaves }}
              />
              <span className="ml-2">
                I'd like to receive updates on specific campaigns.
              </span>
            </label>
          </div>
        </div>
      </section>
    </div>{" "}
    {/* End of padding div */}
  </>
);

export default HomePage;
