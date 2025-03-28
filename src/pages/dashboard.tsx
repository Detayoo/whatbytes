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
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Image
            src="/html5-logo.png"
            alt="HTML5 Logo"
            width={40}
            height={40}
            className="mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">Hyper Text Markup Language</h1>
            <p className="text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg">
          Update
        </button>
      </header>
      <QuickStats />
      <div className="grid grid-cols-2 gap-6">
        <ComparisonGraph />
        <SyllabusAnalysis />
      </div>
    </DashboardLayout>
  );
}
