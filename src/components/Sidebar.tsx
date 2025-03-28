import {
  HomeIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <ul className="space-y-4">
        <li className="flex items-center text-primary font-medium">
          <HomeIcon className="w-5 h-5 mr-2" />
          Dashboard
        </li>
        <li className="flex items-center text-gray-600">
          <ChartBarIcon className="w-5 h-5 mr-2 text-primary" />
          Skill Test
        </li>
        <li className="flex items-center text-gray-600">
          <DocumentTextIcon className="w-5 h-5 mr-2 text-primary" />
          Internship
        </li>
      </ul>
    </div>
  );
};
