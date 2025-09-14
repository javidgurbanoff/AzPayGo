import React, { useState } from "react";
import {
  FaWallet,
  FaBuilding,
  FaInfoCircle,
  FaExchangeAlt,
  FaHistory,
} from "react-icons/fa";

const BalanceCard = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-full bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-xl overflow-hidden p-8">
      <h1 className="text-2xl font-bold text-[#0B1F3A] mb-6">
        Balance Dashboard
      </h1>

      {/* My Balance */}
      <div className="bg-[#0B1F3A] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]">
        <div className="flex  text-white">
          <div className="flex ">
            <FaWallet className="mr-2 text-2xl" />
            <h2 className="text-lg font-semibold">My Balance</h2>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <FaInfoCircle className="cursor-pointer" />
            {showTooltip && (
              <div className="absolute right-0 mt-2 py-2 px-3 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-nowrap">
                Your available balance
              </div>
            )}
          </div>
        </div>
        <p className="text-4xl font-bold mt-4 text-white">$5,240.50</p>
        <p className="text-sm text-gray-200 mt-1">Account ID: 1234567890</p>
      </div>
    </div>
  );
};

export default BalanceCard;
