import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="bg-slate-50">
      <Sidebar />

      <div className="ml-72 min-h-screen">
        <Topbar />

        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;