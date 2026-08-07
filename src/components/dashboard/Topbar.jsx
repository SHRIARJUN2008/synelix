import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-10 py-6">
      <div>
        <h2 className="text-3xl font-bold">
          Institution Dashboard
        </h2>

        <p className="text-slate-500">
          Welcome back 
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl bg-slate-100 p-3">
          <Search size={20} />
        </button>

        <button className="rounded-xl bg-slate-100 p-3">
          <Bell size={20} />
        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
          A
        </div>
      </div>
    </header>
  );
}

export default Topbar;