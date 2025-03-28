"use client";

import { useEffect, useState } from "react";

export const QuestionAnalysis = () => {
  const [percentage, setPercentage] = useState<number>(0);

  // Calculate the percentage: (10/15) * 100 = 66.67%, rounded to 67%
  useEffect(() => {
    const correct = 10;
    const total = 15;
    const calculatedPercentage = Math.round((correct / total) * 100);
    setPercentage(calculatedPercentage);
  }, []);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-[6px] mt-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-black font-semibold">Question Analysis</h3>
        <span className="font-semibold text-primary">10/15</span>
      </div>
      <p className="text-gray-600 text-left">
        You scored 10 questions correct out of 15. However it still needs some
        improvements.
      </p>

      <div className="flex justify-center mt-8">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 140 140">
            <circle
              className="fill-none stroke-gray-200"
              cx="70"
              cy="70"
              r={radius}
              strokeWidth="15"
            />
            <circle
              className="fill-none stroke-blue-600 transition-all duration-500"
              cx="70"
              cy="70"
              r={radius}
              strokeWidth="15"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 70 70)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white transform rotate-45"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2l2.5 6.5L21 9l-5 5 1.5 6.5L12 18l-5.5 2.5L8 14l-5-5 6.5-.5L12 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
