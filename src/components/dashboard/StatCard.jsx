import { ArrowUpRight } from "lucide-react";

function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-3 text-sm text-green-600">
            {subtitle}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-4 transition group-hover:bg-black group-hover:text-white">
          <Icon size={28} />
        </div>
      </div>

      <div className="mt-6 flex items-center text-sm font-medium text-slate-500">
        View Details
        <ArrowUpRight
          className="ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1"
          size={16}
        />
      </div>
    </div>
  );
}

export default StatCard;