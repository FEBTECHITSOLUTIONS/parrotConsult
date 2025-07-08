import React, { useState } from "react";
import QuizResult from "./QuizResult";

const ConsultantQuiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    helpTopic: "",
    stage: "",
    budget: "",
  });

  const handleNext = (field, value) => {
    setAnswers({ ...answers, [field]: value });
    setStep(step + 1);
  };

  if (step === 4) return <QuizResult answers={answers} />;

  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <h2 className="text-xl font-semibold text-center">🤖 Let’s find your perfect consultant</h2>

      {step === 1 && (
        <div className="space-y-2">
          <p className="text-lg font-medium">1️⃣ What do you need help with?</p>
          {[
            "I have a business idea",
            "I already run a business",
            "I want to launch an online store",
            "I have legal or tax concerns",
            "I just want to explore",
            "Other",
          ].map((item) => (
            <button
              key={item}
              className="w-full p-3 rounded-lg border hover:bg-gray-100"
              onClick={() => handleNext("helpTopic", item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2">
          <p className="text-lg font-medium">2️⃣ What’s your current situation?</p>
          {[
            "Just thinking / Research phase",
            "Looking for technical advice",
            "Need help with setup or registration",
            "Want to grow sales",
            "Not sure",
          ].map((item) => (
            <button
              key={item}
              className="w-full p-3 rounded-lg border hover:bg-gray-100"
              onClick={() => handleNext("stage", item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2">
          <p className="text-lg font-medium">3️⃣ What’s your budget for this consultation?</p>
          {["Free", "₹500–₹1,000", "₹1,000–₹5,000", "No budget issue"].map((item) => (
            <button
              key={item}
              className="w-full p-3 rounded-lg border hover:bg-gray-100"
              onClick={() => handleNext("budget", item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultantQuiz;
