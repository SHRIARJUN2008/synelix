import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import StudentTable from "../components/dashboard/StudentTable";
import PlacementChart from "../components/dashboard/PlacementChart";
import AIInsights from "../components/dashboard/AIInsights";
import RecentActivity from "../components/dashboard/RecentActivity";
import {
  GraduationCap,
  Briefcase,
  Users,
  TrendingUp,
  Brain,
  CalendarDays,
  Bell,
  ArrowUpRight,
} from "lucide-react";

function InstitutionDashboard() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            Institution Dashboard
          </p>

          <h1 className="mt-3 text-5xl font-black text-slate-900">
            Hello!
          </h1>

          <p className="mt-3 text-lg text-slate-500">
            Here's what's happening across your institution today.
          </p>
        </div>

        <button className="rounded-2xl bg-black px-7 py-4 font-semibold text-white transition hover:scale-105">
          Generate AI Report
        </button>

      </div>

      {/* Top Cards */}

      <div className="grid gap-6 lg:grid-cols-4">

        <StatCard
          title="Students"
          value="2,458"
          subtitle="+120 enrolled this semester"
          icon={Users}
        />

        <StatCard
          title="Placements"
          value="640"
          subtitle="92% Placement Rate"
          icon={Briefcase}
        />

        <StatCard
          title="Departments"
          value="18"
          subtitle="Engineering & Science"
          icon={GraduationCap}
        />

        <StatCard
          title="AI Readiness"
          value="96%"
          subtitle="Excellent"
          icon={TrendingUp}
        />

      </div>

      {/* Middle Grid */}

      <div className="mt-10 grid gap-6 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <PlacementChart />
  </div>

  <AIInsights />



        {/* AI Insights */}

        <div className="rounded-3xl bg-gradient-to-br from-black to-slate-800 p-8 text-white shadow-xl">

          <Brain size={40} />

          <h2 className="mt-8 text-3xl font-bold">
            AI Insights
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            AI predicts that Computer Science students have the highest
            placement probability this semester.
          </p>

          <button className="mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
            View Report

            <ArrowUpRight size={18} />
          </button>

        </div>

        {/* Upcoming Drives */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <CalendarDays />

            <h2 className="text-2xl font-bold">
              Upcoming Drives
            </h2>

          </div>

          <div className="mt-8 space-y-6">

            <div>
              <h3 className="font-semibold">
                Google
              </h3>

              <p className="text-slate-500">
                12 Aug • Software Engineer
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Microsoft
              </h3>

              <p className="text-slate-500">
                18 Aug • Product Engineer
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Amazon
              </h3>

              <p className="text-slate-500">
                24 Aug • Backend Developer
              </p>
            </div>

          </div>

        </div>

        {/* Notifications */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <Bell />

            <h2 className="text-2xl font-bold">
              Notifications
            </h2>

          </div>

          <div className="mt-8 space-y-6">

            <p className="rounded-xl bg-slate-100 p-4">
              🎉 34 students placed this week.
            </p>

            <p className="rounded-xl bg-slate-100 p-4">
              📊 AI report is ready.
            </p>

            <p className="rounded-xl bg-slate-100 p-4">
              🏢 Infosys recruitment drive confirmed.
            </p>

          </div>

        </div>

      </div>

      {/* Student Table */}

      <StudentTable />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
  <div className="lg:col-span-2">
    
  </div>

  <RecentActivity />
</div>

    </DashboardLayout>
  );
}

export default InstitutionDashboard;