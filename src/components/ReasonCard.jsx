import React from "react";

const ReasonCard = ({ icon: Icon, title, description, className }) => {
  return (
    <div
      className={`group border border-gray-700 rounded-2xl p-8 
                 bg-gradient-to-br from-[#0f172a]/80 via-[#1e293b]/70 to-[#0f172a]/80 
                 backdrop-blur-md shadow-lg transition-all duration-500 
                 hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] hover:border-indigo-500 
                 hover:scale-[1.02] flex flex-col justify-between h-full ${className}`}
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition">
          <Icon size={28} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default ReasonCard;