// controllers/assistant.controller.js
import { Consultant } from "../models/ConsultantModel.js";
import { ApiResponse } from "../utils/Apiresponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import openai from "../utils/openai.js";

const categoryMap = [
  {
    keywords: ["business", "idea", "startup", "plan", "growth"],
    category: "Business Strategy",
  },
  {
    keywords: ["it", "technology", "app", "software", "website", "developer"],
    category: "Information Technology",
  },
  {
    keywords: ["sales", "marketing", "promote", "advertise", "campaign"],
    category: "Marketing & Sales",
  },
  {
    keywords: ["accounting", "budget", "finance", "money", "tax"],
    category: "Finance & Accounting",
  },
  {
    keywords: ["hr", "hiring", "team", "recruit", "employee"],
    category: "Human Resources",
  },
  {
    keywords: ["law", "legal", "compliance", "contract", "agreement"],
    category: "Legal Advisory",
  },
];

function getMappedCategory(userInput) {
  const input = userInput.toLowerCase();
  for (const item of categoryMap) {
    if (item.keywords.some((word) => input.includes(word))) {
      return item.category;
    }
  }
  return null; // fallback
}

export const suggestConsultant = asyncHandler(async (req, res) => {
  const { helpTopic, stage, budget } = req.body;

  const combinedInput = `${helpTopic} ${stage}`;
  const mappedCategory = getMappedCategory(combinedInput) || helpTopic;

  console.log("🧠 Mapped Category:", mappedCategory);
  console.log("🔥 /suggest route hit");
  console.log("Received request:", req.body);

  let maxRate = 99999;
  if (budget === "Free") maxRate = 0;
  else if (budget === "₹500–₹1,000") maxRate = 1000;
  else if (budget === "₹1,000–₹5,000") maxRate = 5000;

  const consultants = await Consultant.find({
    isApproved: true,
    visibleOnPlatform: true,
    // primaryCategory: { $regex: mappedCategory, $options: "i" },

    // hourlyRate: { $lte: maxRate },
  }).limit(5);

  if (!consultants.length) {
    return res.status(404).json(new ApiResponse(404, "No consultants found"));
  }

  const consultantOptions = consultants.map((c, index) => ({
    index: index + 1,
    name: c.name,
    category: c.primaryCategory,
    skills: c.keySkills.join(", "),
    rate: c.hourlyRate,
    services: c.specializedServices.join(", "),
    experience: c.experience,
  }));

  const userContext = `
  User needs help with: ${helpTopic}
  Their current situation: ${stage}
  Their budget: ${budget}
  Here are some available consultants:
  ${JSON.stringify(consultantOptions, null, 2)}
  
  Please:
  - Pick the best-fit consultant
  - Give a short reason why they are ideal
  - Output JSON like:
  {
    "recommendedIndex": 2,
    "message": "We recommend ABC because..."
  }`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are an expert consultant matchmaker for Parrot Consult.",
      },
      {
        role: "user",
        content: userContext,
      },
    ],
  });

  const reply = completion.choices[0].message.content;
  let aiOutput;

  try {
    aiOutput = JSON.parse(reply);
  } catch (e) {
    return res
      .status(500)
      .json(new ApiResponse(500, "AI response could not be parsed"));
  }

  const recommended = consultants[aiOutput.recommendedIndex - 1];

  res.status(200).json(
    new ApiResponse(200, "AI Recommendation successful", {
      recommended,
      message: aiOutput.message,
      options: consultants,
    })
  );
});
