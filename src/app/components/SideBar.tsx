import Link from "next/link";
import { MdDashboard } from "react-icons/md";

const SideBar = () => {
  const links = [
    { to: "/", label: "Dashboard", icon: <MdDashboard /> },
    { to: "/members", label: "Members", icon: <MdDashboard /> },
    { to: "/memberships", label: "Memberships", icon: <MdDashboard /> },
    { to: "/transactions", label: "Transactions", icon: <MdDashboard /> },
    { to: "/profile", label: "Profile", icon: <MdDashboard /> },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col justify-between">
      <div className="flex items-center px-4 py-0 ">
        {/* App logo */}
        <img src="your-logo.svg" alt="App Logo" className="h-8 w-8 mr-2" />
        {/* App title */}
        <span className="font-bold text-lg">Gym Management</span>
      </div>

      <ul className="flex flex-col ">
        {links.map((link) => (
          <li key={link.to} className="px-4 py-2 hover:bg-gray-700">
            <Link href={link.to} className="flex items-center">
              {link.icon}
              <span className="ml-2">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
