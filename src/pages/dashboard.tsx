import Image from "next/image";
import { useState } from "react";

import {
  QuickStats,
  ComparisonGraph,
  SyllabusAnalysis,
  DashboardLayout,
  QuestionAnalysis,
  UpdateModal,
} from "@/components";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  const updateState = (payload: Partial<typeof state>) => {
    setState((prev) => ({ ...prev, ...payload }));
  };

  return (
    <DashboardLayout>
      <p className="mb-6 text-black">Skill Test</p>
      <div className="flex gap-10">
        <div className="flex flex-col gap-y-1 w-3/5">
          <div className="flex justify-between items-center mb-6 py-4 px-4 rounded-[6px] border border-gray-200">
            <div className="flex items-center">
              <Image
                src="/images/html5.png"
                alt="HTML5 Logo"
                width={40}
                height={40}
                className="mr-4"
              />
              <div>
                <h1 className="font-semibold text-black text-[17px]">
                  Hyper Text Markup Language
                </h1>
                <p className="text-gray-600">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#060a44] text-white px-6 py-2 rounded-lg cursor-pointer"
            >
              Update
            </button>
          </div>
          <QuickStats state={state} />
          <ComparisonGraph percentile={+state?.percentile || 0} />
        </div>
        <div className="flex-1 flex flex-col gap-y-6">
          <SyllabusAnalysis />
          <QuestionAnalysis score={+state?.score || 0} />
        </div>
      </div>
      <UpdateModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        state={state}
        updateState={updateState}
      />
    </DashboardLayout>
  );
}
