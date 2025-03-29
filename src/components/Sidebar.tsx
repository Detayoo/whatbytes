import {
  HomeIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const activeLink = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 py-6 pr-6">
      <ul className="space-y-4">
        <Link
          href="/dashboard"
          className={`flex items-center pl-4 py-4 ${
            activeLink === "/dashboard"
              ? "text-primary bg-primary/5 font-medium rounded-r-[30px]"
              : "text-gray-600 font-normal"
          }`}
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Dashboard
        </Link>
        <Link
          href="/skill-test"
          className={`flex items-center pl-4 py-4 ${
            activeLink === "/skill-test"
              ? "text-primary bg-primary/5 font-medium rounded-r-[30px]"
              : "text-gray-600 font-normal"
          }`}
        >
          <ChartBarIcon className="w-5 h-5 mr-2" />
          Skill Test
        </Link>
        <Link
          href="/internship"
          className={`flex items-center pl-4 py-4 ${
            activeLink === "/internship"
              ? "text-primary bg-primary/5 font-medium rounded-r-[30px]"
              : "text-gray-600 font-normal"
          }`}
        >
          <DocumentTextIcon className="w-5 h-5 mr-2" />
          Internship
        </Link>
      </ul>
    </div>
  );
};
