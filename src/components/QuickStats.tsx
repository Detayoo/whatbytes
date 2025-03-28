import {
  TrophyIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import { State } from "../../types";

export const QuickStats = ({ state }: { state: State }) => {
  return (
    <div className="bg-white p-6 mb-6 py-3 px-4 rounded-[6px] border border-gray-200">
      <h3 className="text-black text-[17px] font-semibold mb-4">
        Quick Statistics
      </h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex gap-x-3">
          <div className="bg-gray-200 border border-gray-300 w-12 h-12 flex justify-center items-center rounded-[50%]">
            <TrophyIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex flex-col gap-y-1 items-start">
            <span className="text-2xl text-black font-bold">
              {state?.rank || 0}
            </span>
            <p className="text-gray-600 text-[12px]">YOUR RANK</p>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="bg-gray-200 border border-gray-300 w-12 h-12 flex justify-center items-center rounded-[50%]">
            <ChartBarIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex flex-col gap-y-1 items-start">
            <span className="text-2xl text-black font-bold">
              {state?.percentile || 0}%
            </span>
            <p className="text-gray-600 text-[12px]">PERCENTILE</p>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="bg-gray-200 border border-gray-300 w-12 h-12 flex justify-center items-center rounded-[50%]">
            <CheckCircleIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex flex-col gap-y-1 items-start">
            <span className="text-2xl text-black font-bold">
              {state?.score || 0}/15
            </span>
            <p className="text-gray-600 text-[12px]">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
