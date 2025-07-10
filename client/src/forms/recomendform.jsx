// import React, { useState } from "react";
// import QuizResult from "./QuizResult";

// const ConsultantQuiz = () => {
//   const [step, setStep] = useState(1);
//   const [answers, setAnswers] = useState({
//     helpTopic: "",
//     stage: "",
//     budget: "",
//   });

//   const handleNext = (field, value) => {
//     setAnswers({ ...answers, [field]: value });
//     setStep(step + 1);
//   };

//   if (step === 4) return <QuizResult answers={answers} />;

//   return (
//     <div className="max-w-md mx-auto mt-10 space-y-6">
//       <h2 className="text-xl font-semibold text-center">🤖 Let’s find your perfect consultant</h2>

//       {step === 1 && (
//         <div className="space-y-2">
//           <p className="text-lg font-medium">1️⃣ What do you need help with?</p>
//           {[
//             "I have a business idea",
//             "I already run a business",
//             "I want to launch an online store",
//             "I have legal or tax concerns",
//             "I just want to explore",
//             "Other",
//           ].map((item) => (
//             <button
//               key={item}
//               className="w-full p-3 rounded-lg border hover:bg-gray-100"
//               onClick={() => handleNext("helpTopic", item)}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       )}

//       {step === 2 && (
//         <div className="space-y-2">
//           <p className="text-lg font-medium">2️⃣ What’s your current situation?</p>
//           {[
//             "Just thinking / Research phase",
//             "Looking for technical advice",
//             "Need help with setup or registration",
//             "Want to grow sales",
//             "Not sure",
//           ].map((item) => (
//             <button
//               key={item}
//               className="w-full p-3 rounded-lg border hover:bg-gray-100"
//               onClick={() => handleNext("stage", item)}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       )}

//       {step === 3 && (
//         <div className="space-y-2">
//           <p className="text-lg font-medium">3️⃣ What’s your budget for this consultation?</p>
//           {["Free", "₹500–₹1,000", "₹1,000–₹5,000", "No budget issue"].map((item) => (
//             <button
//               key={item}
//               className="w-full p-3 rounded-lg border hover:bg-gray-100"
//               onClick={() => handleNext("budget", item)}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConsultantQuiz;


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
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-amber-150 to-green-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-orange-400 rounded-full animate-pulse"></div>
      </div>

      {/* Decorative mountains in background */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-green-200/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 200" className="w-full h-48 opacity-20">
          <path d="M0,200 L200,100 L400,150 L600,80 L800,120 L1000,60 L1200,100 L1200,200 Z" fill="#059669"/>
          <path d="M0,200 L150,120 L350,170 L550,100 L750,140 L950,80 L1200,120 L1200,200 Z" fill="#10b981"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto pt-20 pb-10 px-4">
        {/* Header with parrot mascot */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-4xl animate-bounce">
              <img src="/parrot.jpg" className="w-18 h-18 rounded-full" alt="" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-900 via-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
            🤖 Let's find your perfect consultant
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Answer a few quick questions to get personalized recommendations
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i <= step
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-center text-sm text-gray-500">
            Step {step} of 3
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
          {/* Card decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">1️⃣</span>
                  What do you need help with?
                </p>
                {[
                  "I have a business idea",
                  "I already run a business",
                  "I want to launch an online store",
                  "I have legal or tax concerns",
                  "I just want to explore",
                  "Other",
                ].map((item, index) => (
                  <button
                    key={item}
                    className="w-full p-4 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 text-left font-medium text-gray-700 hover:text-green-700 shadow-sm hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 group"
                    onClick={() => handleNext("helpTopic", item)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex items-center justify-between">
                      {item}
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">2️⃣</span>
                  What's your current situation?
                </p>
                {[
                  "Just thinking / Research phase",
                  "Looking for technical advice",
                  "Need help with setup or registration",
                  "Want to grow sales",
                  "Not sure",
                ].map((item, index) => (
                  <button
                    key={item}
                    className="w-full p-4 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 text-left font-medium text-gray-700 hover:text-green-700 shadow-sm hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 group"
                    onClick={() => handleNext("stage", item)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex items-center justify-between">
                      {item}
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">3️⃣</span>
                  What's your budget for this consultation?
                </p>
                {["Free", "₹500–₹1,000", "₹1,000–₹5,000", "No budget issue"].map((item, index) => (
                  <button
                    key={item}
                    className="w-full p-4 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 text-left font-medium text-gray-700 hover:text-green-700 shadow-sm hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 group"
                    onClick={() => handleNext("budget", item)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex items-center justify-between">
                      {item}
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Helpful tip */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="animate-pulse">💡</span>
            Take your time - we're here to help you find the perfect match!
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        button {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ConsultantQuiz;
