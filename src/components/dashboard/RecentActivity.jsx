import {
  UserPlus,
  Briefcase,
  Bell,
  CheckCircle,
} from "lucide-react";

const activities = [
  {
    icon: UserPlus,
    title: "15 new students registered",
    time: "10 minutes ago",
  },
  {
    icon: Briefcase,
    title: "TCS recruitment drive scheduled",
    time: "1 hour ago",
  },
  {
    icon: CheckCircle,
    title: "AI report generated successfully",
    time: "3 hours ago",
  },
  {
    icon: Bell,
    title: "Placement statistics updated",
    time: "Today",
  },
];

function RecentActivity() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-6">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl p-4 transition hover:bg-slate-50"
          >
            <div className="rounded-xl bg-slate-100 p-3">
              <item.icon size={20} />
            </div>

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;