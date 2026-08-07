import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: Users, title: "Students" },
  { icon: Briefcase, title: "Placements" },
  { icon: BarChart3, title: "Analytics" },
  { icon: Settings, title: "Settings" },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-slate-200 bg-white">
      <div className="p-8">
        <h1 className="text-3xl font-black">Synelix</h1>
      </div>

      <nav className="px-4">
        {menu.map((item) => (
          <button
            key={item.title}
            className="mb-2 flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition hover:bg-slate-100"
          >
            <item.icon size={20} />
            {item.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;