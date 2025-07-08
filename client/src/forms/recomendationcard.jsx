import React from "react";
import { PhoneCall, Star, Clock } from "lucide-react";

const ConsultantRecommendationCard = ({ consultant, message, onBook }) => {
  if (!consultant) return null;

  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="p-4 shadow-lg rounded-2xl border">
        <div className="flex items-center gap-4">
          <img
            src={consultant.profilePicture}
            alt={consultant.name}
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-xl font-semibold">{consultant.name}</h2>
            <div className="flex items-center text-sm text-gray-600">
              <Star size={16} className="text-yellow-500 mr-1" />
              4.8 • 
              <Clock size={14} className="ml-2 mr-1" /> Available Tomorrow
            </div>
            <div className="text-xs text-gray-500">
              {consultant.primaryCategory}
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="text-sm">
            <strong>Expertise:</strong> {consultant.specializedServices?.join(", ")}
          </div>
          <div className="text-sm">
            <strong>Experience:</strong> {consultant.experience}+ yrs
          </div>
          <div className="text-sm">
            <strong>Hourly Rate:</strong> ₹{consultant.hourlyRate}
          </div>

          {message && (
            <div className="text-sm mt-3 bg-blue-50 p-2 rounded-lg border text-blue-900">
              💡 <strong>AI Suggestion:</strong> {message}
            </div>
          )}

          <div className="mt-4 flex justify-between gap-2">
            <button
              onClick={onBook}
              className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantRecommendationCard;
