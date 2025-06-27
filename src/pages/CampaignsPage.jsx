import React from "react";
import { COLORS } from "../constants/colors";

const CampaignsPage = ({ onNavigate }) => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: `rgba(66, 94, 134, 0.1)`,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.purpleHeart }}
      >
        Our Campaigns
      </h1>
      <p className="text-lg mb-8">
        Explore our ongoing and past campaigns that are making a real difference
        in communities worldwide.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Child and Orphan Support Program",
            description:
              "Providing safe shelter and feeding programs, school uniform, shoes, books, and tuition support, including after-school arts, music, and tutoring.",
            progress: "10%",
            img: "https://placehold.co/400x250/FBF7F1/425E86?text=Child+Support+Campaign",
          },
          {
            title: "Women's Empowerment Hub",
            description:
              "Offering business and vocational training, legal clinics, GBV survivor support, and formation of cooperative groups for savings and credit.",
            progress: "20%",
            img: "https://placehold.co/400x250/FBF7F1/425E86?text=Women+Empowerment+Campaign",
          },
          {
            title: "Community Health Initiative",
            description:
              "Organizing annual medical camps, mobile clinics, immunizations, deworming, and nutrition education, alongside water and sanitation projects (e.g., boreholes, toilets).",
            progress: "17%",
            img: "https://placehold.co/400x250/FBF7F1/425E86?text=Healthcare+Campaign",
          },
          {
            title: "Education and Literacy Drive",
            description:
              "Providing scholarships for high-performing students, adult education classes (literacy, numeracy, digital skills), and future partnering with schools to improve infrastructure.",
            progress: "0%",
            img: "https://placehold.co/400x250/FBF7F1/425E86?text=Education+Campaign",
          },
          {
            title: "Youth Empowerment and Innovation",
            description:
              "Offering ICT training, coding bootcamps, talent showcases (dance, music, art), and mentorship and peer support groups.",
            progress: "0%",
            img: "https://placehold.co/400x250/FBF7F1/425E86?text=Youth+Campaign",
          },
          {
            title: "Environmental and Civic Engagement",
            description:
              "Organizing monthly clean-up and tree-planting campaigns, awareness campaigns on civic rights and responsibilities, and disaster preparedness and climate resilience forums.",
            progress: "0%",
            img: "https://placehold.co/400x250/FBF7F1/425E86?text=Environment+Campaign",
          },
        ].map((campaign, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md border-t-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
              color: COLORS.darkBlueTextOutline,
            }}
          >
            <img
              src={campaign.img}
              alt={campaign.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{campaign.title}</h3>
            <p className="mb-4">{campaign.description}</p>
            <div
              className="w-full rounded-full h-2.5 mb-2"
              style={{ backgroundColor: `rgba(66, 94, 134, 0.2)` }}
            >
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: campaign.progress,
                  backgroundColor: COLORS.oliveBranchLeaves,
                }}
              ></div>
            </div>
            <p className="text-sm" style={{ color: COLORS.oliveBranchLeaves }}>
              {campaign.progress} Funded
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
                    campaignName: campaign.title,
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
        ))}
      </div>
      <button
        className="px-8 py-4 rounded-full transition-colors mt-10"
        style={{ backgroundColor: COLORS.darkBlueTextOutline, color: "white" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(41, 56, 122, 0.8)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.darkBlueTextOutline)
        }
        onClick={() => onNavigate("get-involved")}
      >
        Get Involved
      </button>
    </div>
  </div>
);

export default CampaignsPage;
