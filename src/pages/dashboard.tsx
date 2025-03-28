import Image from "next/image";

import {
  QuickStats,
  ComparisonGraph,
  SyllabusAnalysis,
  DashboardLayout,
} from "@/components";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <p className="mb-4">Skill Test</p>
      <div className="flex gap-10">
        <div className="flex flex-col gap-y-6 w-3/5">
          <div className="flex justify-between items-center mb-6 py-3 px-4 rounded-[4px] border border-gray-200">
            <div className="flex items-center">
              <Image
                src="/images/html5.png"
                alt="HTML5 Logo"
                width={40}
                height={40}
                className="mr-4"
              />
              <div>
                <h1 className="font-bold text-black">
                  Hyper Text Markup Language
                </h1>
                <p className="text-gray-600">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <button className="bg-[#060a44] text-white px-6 py-2 rounded-lg">
              Update
            </button>
          </div>
          <QuickStats />
          <ComparisonGraph />
        </div>
        <div className="flex flex-co gap-y-6">
          <SyllabusAnalysis />
        </div>
      </div>
    </DashboardLayout>
  );
}
