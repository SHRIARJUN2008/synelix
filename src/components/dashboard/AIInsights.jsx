import { Brain } from "lucide-react";

function AIInsights() {
  return (
    <div className="rounded-3xl bg-black p-8 text-white">

      <Brain size={38} />

      <h2 className="mt-6 text-3xl font-bold">
        AI Recommendation
      </h2>

      <p className="mt-6 leading-8 text-slate-300">
        Students from Computer Science are 27% more likely to secure
        placements this month.

        <br /><br />

        AI recommends organizing an AWS workshop for Electronics students
        to improve employability.
      </p>

      <button className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-black">
        Generate Full Report
      </button>

    </div>
  );
}

export default AIInsights;