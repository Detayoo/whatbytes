import {
  TrophyIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export const QuickStats = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Quick Statistics</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="flex justify-center items-center mb-2">
            <TrophyIcon className="w-6 h-6 text-gray-600 mr-2" />
            <span className="text-2xl font-bold">1</span>
          </div>
          <p className="text-gray-600">YOUR RANK</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-2">
            <ChartBarIcon className="w-6 h-6 text-gray-600 mr-2" />
            <span className="text-2xl font-bold">30%</span>
          </div>
          <p className="text-gray-600">PERCENTILE</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-2">
            <CheckCircleIcon className="w-6 h-6 text-success mr-2" />
            <span className="text-2xl font-bold">10/15</span>
          </div>
          <p className="text-gray-600">CORRECT ANSWERS</p>
        </div>
      </div>
    </div>
  );
};
