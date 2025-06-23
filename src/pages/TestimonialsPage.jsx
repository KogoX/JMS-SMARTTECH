import React from "react";
import { COLORS } from "../constants/colors";

const TestimonialsPage = () => (
  <div
    className="py-16 px-4"
    style={{
      backgroundColor: `rgba(66, 94, 134, 0.05)`,
      color: COLORS.darkBlueTextOutline,
    }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h1
        className="text-5xl font-bold mb-8"
        style={{ color: COLORS.purpleHeart }}
      >
        Voices of Hope: Full Stories
      </h1>
      <p className="text-lg mb-8">
        Read the inspiring testimonials from our donors, beneficiaries, and
        volunteers who are part of our journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            text: "Donating to this organization has been incredibly fulfilling. Their transparency and impact are truly inspiring.",
            author: "Jane Doe",
            role: "Donor",
            rating: "★★★★★",
            img: "https://placehold.co/50x50/FBF7F1/425E86?text=D1",
          },
          {
            text: "Thanks to their support, my children can now go to school. They changed our lives for the better.",
            author: "John Smith",
            role: "Beneficiary",
            rating: "★★★★★",
            img: "https://placehold.co/50x50/FBF7F1/425E86?text=B1",
          },
          {
            text: "The team's dedication is unparalleled. Proud to support such a committed group.",
            author: "Emily White",
            role: "Volunteer",
            rating: "★★★★☆",
            img: "https://placehold.co/50x50/FBF7F1/425E86?text=V1",
          },
          {
            text: "I've seen firsthand the positive changes they bring to communities. Truly impactful work!",
            author: "Michael Green",
            role: "Donor",
            rating: "★★★★★",
            img: "https://placehold.co/50x50/FBF7F1/425E86?text=D2",
          },
          {
            text: "Getting clean water was a dream, now it's a reality because of this organization.",
            author: "Sarah Lee",
            role: "Beneficiary",
            rating: "★★★★★",
            img: "https://placehold.co/50x50/FBF7F1/425E86?text=B2",
          },
          {
            text: "Every hour I volunteer feels like it makes a huge difference. So rewarding!",
            author: "David Brown",
            role: "Volunteer",
            rating: "★★★★★",
            img: "https://placehold.co/50x50/FBF7F1/425E86?text=V2",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md border-l-4"
            style={{
              backgroundColor: COLORS.backgroundOffWhite,
              borderColor: COLORS.oliveBranchLeaves,
            }}
          >
            <p className="italic text-lg mb-4">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <img
                src={testimonial.img}
                alt={testimonial.author}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p
                  className="text-sm"
                  style={{ color: COLORS.oliveBranchLeaves }}
                >
                  {testimonial.role}
                </p>
                <div style={{ color: COLORS.goldenYellowHands }}>
                  {testimonial.rating}
                </div>
              </div>
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
        onClick={() => onNavigate("home")}
      >
        Back to Homepage
      </button>
    </div>
  </div>
);

export default TestimonialsPage;
