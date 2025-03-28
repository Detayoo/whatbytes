import {
  HomeIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const activeLink = () => {
    return usePathname();
  };

  console.log("active link", activeLink());
  return (
    <div className="w-64 bg-white border-r border-gray-200 py-6 pr-6">
      <ul className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center text-gray-600 pl-4"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Dashboard
        </Link>
        <Link
          href="/skill-test"
          className="flex items-center text-primary bg-primary/5 font-medium rounded-r-[30px] py-4 pl-4"
        >
          <ChartBarIcon className="w-5 h-5 mr-2 text-primary" />
          Skill Test
        </Link>
        <Link
          href="/internship"
          className="flex items-center text-gray-600 pl-4"
        >
          <DocumentTextIcon className="w-5 h-5 mr-2" />
          Internship
        </Link>
      </ul>
    </div>
  );
};
