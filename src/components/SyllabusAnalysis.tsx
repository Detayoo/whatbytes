export const SyllabusAnalysis = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h3>
      <ul className="space-y-4">
        <li>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">HTML Tools, Forms, History</span>
            <span className="text-gray-600">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </li>
        <li>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Tags & References in HTML</span>
            <span className="text-gray-600">60%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-warning h-2.5 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </li>
        <li>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Tables & References in HTML</span>
            <span className="text-gray-600">24%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-danger h-2.5 rounded-full"
              style={{ width: "24%" }}
            ></div>
          </div>
        </li>
        <li>
          <div className="flex justify-between mb-1">
            <span className="text-gray-600">Tables & CSS Basics</span>
            <span className="text-gray-600">96%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-success h-2.5 rounded-full"
              style={{ width: "96%" }}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  );
};
