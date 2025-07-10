// import React from "react";
// import { PhoneCall, Star, Clock } from "lucide-react";

// const ConsultantRecommendationCard = ({ consultant, message, onBook }) => {
//   if (!consultant) return null;

//   return (
//     <div className="max-w-md mx-auto space-y-4">
//       <div className="p-4 shadow-lg rounded-2xl border">
//         <div className="flex items-center gap-4">
//           <img
//             src={consultant.profilePicture}
//             alt={consultant.name}
//             className="w-16 h-16 rounded-full object-cover border"
//           />
//           <div>
//             <h2 className="text-xl font-semibold">{consultant.name}</h2>
//             <div className="flex items-center text-sm text-gray-600">
//               <Star size={16} className="text-yellow-500 mr-1" />
//               4.8 •
//               <Clock size={14} className="ml-2 mr-1" /> Available Tomorrow
//             </div>
//             <div className="text-xs text-gray-500">
//               {consultant.primaryCategory}
//             </div>
//           </div>
//         </div>

//         <div className="mt-4 space-y-2">
//           <div className="text-sm">
//             <strong>Expertise:</strong> {consultant.specializedServices?.join(", ")}
//           </div>
//           <div className="text-sm">
//             <strong>Experience:</strong> {consultant.experience}+ yrs
//           </div>
//           <div className="text-sm">
//             <strong>Hourly Rate:</strong> ₹{consultant.hourlyRate}
//           </div>

//           {message && (
//             <div className="text-sm mt-3 bg-blue-50 p-2 rounded-lg border text-blue-900">
//               💡 <strong>AI Suggestion:</strong> {message}
//             </div>
//           )}

//           <div className="mt-4 flex justify-between gap-2">
//             <button
//               onClick={onBook}
//               className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
//             >
//               <PhoneCall className="w-4 h-4 mr-2" />
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConsultantRecommendationCard;

// import React from "react";
// import { PhoneCall, Star, Clock } from "lucide-react";

// const ConsultantRecommendationCard = ({ consultant, message, onBook }) => {
//   if (!consultant) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-200 via-amber-150 to-green-10 relative overflow-hidden flex items-center justify-center">
//       <div className="max-w-lg mx-auto space-y-6">
//         <div className="group relative bg-white/90 backdrop-blur-sm p-6 shadow-2xl rounded-3xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
//           {/* Animated background elements */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
//           <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-400/20 to-green-400/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>

//           {/* Shine effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

//           <div className="relative z-10">
//             {/* Header Section */}
//             <div className="flex items-center gap-4 mb-6">
//               <div className="relative">
//                 <img
//                   src={consultant.profilePicture}
//                   alt={consultant.name}
//                   className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
//                   <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-900 via-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
//                   {consultant.name}
//                 </h2>
//                 <div className="flex items-center text-sm text-gray-600 mb-1">
//                   <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
//                     <Star size={14} className="text-yellow-500 mr-1" />
//                     <span className="font-semibold text-yellow-700">4.8</span>
//                   </div>
//                   <span className="mx-2 text-gray-400">•</span>
//                   <div className="flex items-center bg-green-50 px-2 py-1 rounded-full">
//                     <Clock size={12} className="text-green-500 mr-1" />
//                     <span className="font-medium text-green-700">
//                       Available Tomorrow
//                     </span>
//                   </div>
//                 </div>
//                 <div className="inline-block bg-gradient-to-r from-teal-100 to-green-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
//                   {consultant.primaryCategory}
//                 </div>
//               </div>
//             </div>

//             {/* Details Section */}
//             <div className="space-y-4 mb-6">
//               <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100">
//                 <div className="grid grid-cols-1 gap-3">
//                   <div className="flex items-start gap-3">
//                     <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
//                     <div>
//                       <span className="font-semibold text-green-800">
//                         Expertise:{" "}
//                       </span>
//                       <span className="text-green-700">
//                         {consultant.specializedServices?.join(", ")}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
//                     <div>
//                       <span className="font-semibold text-emerald-800">
//                         Experience:{" "}
//                       </span>
//                       <span className="text-emerald-700">
//                         {consultant.experience}+ years
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
//                     <div>
//                       <span className="font-semibold text-teal-800">
//                         Hourly Rate:{" "}
//                       </span>
//                       <span className="text-teal-700 font-bold">
//                         ₹{consultant.hourlyRate}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {message && (
//                 <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200 overflow-hidden">
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl"></div>
//                   <div className="relative z-10 flex items-start gap-3">
//                     <div className="text-2xl animate-bounce">💡</div>
//                     <div>
//                       <span className="font-bold text-blue-800">
//                         AI Suggestion:{" "}
//                       </span>
//                       <span className="text-blue-700">{message}</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Action Button */}
//             <div className="flex justify-center">
//               <button
//                 onClick={onBook}
//                 className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3"
//               >
//                 <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
//                 <span className="relative z-10">Book Consultation</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Floating elements for extra visual appeal */}
//         <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
//         <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-pulse"></div>

//         <style jsx>{`
//           @keyframes float {
//             0%,
//             100% {
//               transform: translateY(0px);
//             }
//             50% {
//               transform: translateY(-10px);
//             }
//           }

//           .animate-float {
//             animation: float 3s ease-in-out infinite;
//           }

//           .shadow-3xl {
//             box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//           }
//         `}</style>
//       </div>
//       <div className="inline-block relative ">
//         <img src="/parrot.jpg" className="w-100 h-100 rounded-full" alt="" />

//         <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-ping"></div>
//       </div>
//     </div>
//   );
// };

// export default ConsultantRecommendationCard;



import React from "react";
import { PhoneCall, Star, Clock } from "lucide-react";

const ConsultantRecommendationCard = ({ consultant, message, onBook }) => {
  if (!consultant) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-amber-150 to-green-10 relative overflow-hidden flex items-center justify-center">
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

      <div className="flex items-center justify-center gap-8 max-w-6xl mx-auto px-4 relative z-10">
        {/* Parrot holding the card */}
        <div className="relative">
          <div className="relative">
            <img 
              src="/parrot.jpg" 
              className="w-80 h-80 rounded-full object-cover border-8 border-white/50 shadow-2xl animate-float" 
              alt="Parrot mascot" 
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Speech bubble from parrot */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
            <p className="text-sm font-medium text-green-700">Perfect match for you! 🎯</p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white/90"></div>
            </div>
          </div>
        </div>

        {/* Consultant Card */}
        <div className="max-w-lg space-y-6">
          <div className="group relative bg-white/90 backdrop-blur-sm p-6 shadow-2xl rounded-3xl border border-white/20 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-400/20 to-green-400/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <div className="relative z-10">
              {/* Header Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={consultant.profilePicture}
                    alt={consultant.name}
                    className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-900 via-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
                    {consultant.name}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <Star size={14} className="text-yellow-500 mr-1" />
                      <span className="font-semibold text-yellow-700">4.8</span>
                    </div>
                    <span className="mx-2 text-gray-400">•</span>
                    <div className="flex items-center bg-green-50 px-2 py-1 rounded-full">
                      <Clock size={12} className="text-green-500 mr-1" />
                      <span className="font-medium text-green-700">
                        Available Tomorrow
                      </span>
                    </div>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-teal-100 to-green-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {consultant.primaryCategory}
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-green-800">
                          Expertise:{" "}
                        </span>
                        <span className="text-green-700">
                          {consultant.specializedServices?.join(", ")}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-emerald-800">
                          Experience:{" "}
                        </span>
                        <span className="text-emerald-700">
                          {consultant.experience}+ years
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-teal-800">
                          Hourly Rate:{" "}
                        </span>
                        <span className="text-teal-700 font-bold">
                          ₹{consultant.hourlyRate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {message && (
                  <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl"></div>
                    <div className="relative z-10 flex items-start gap-3">
                      <div className="text-2xl animate-bounce">💡</div>
                      <div>
                        <span className="font-bold text-blue-800">
                          AI Suggestion:{" "}
                        </span>
                        <span className="text-blue-700">{message}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={onBook}
                  className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center gap-3"
                >
                  <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Book Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connecting line from parrot to card */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-30 animate-pulse"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .flex {
            flex-direction: column;
            gap: 2rem;
          }
          
          .w-32 {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConsultantRecommendationCard;