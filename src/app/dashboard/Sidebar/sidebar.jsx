import Link from "next/link";
import {
  RiDashboardLine,
  RiProductHuntLine,
  RiOrderPlayLine,
  RiAccountBoxLine,
} from "react-icons/ri";

const items = [
  {
    name: "Dashboard",
    href: "dashboard",
    icon: <RiDashboardLine />,
  },
  {
    name: "Products",
    href: "dashboard/product",
    icon: <RiProductHuntLine />,
  },
  {
    name: "Category",
    href: "dashboard/cetagory",
    icon: <RiDashboardLine />,
  },
  {
    name: "Order Details",
    href: "dashboard/orddetails",
    icon: <RiOrderPlayLine />,
  },
  {
    name: "Account Details",
    href: "dashboard/accdetails",
    icon: <RiAccountBoxLine />,
  },
];

const Sidebar = () => {
  return (
    <div className={` hidden lg:block min-w-[200px] bg-gray-100 rounded-md p-3 `}>
      <div className="space-y-3">
        {items.map((item, index) => (
          <Link href={`/${item.href}`} key={index}>
            <h1 className="px-2 py-3 hover:py-2 transition-all duration-500 hover:bg-gray-200 cursor-pointer select-none rounded-md flex items-center">
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
