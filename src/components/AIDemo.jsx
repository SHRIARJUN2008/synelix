import { motion } from "framer-motion";
import { Brain, Sparkles, FileText } from "lucide-react";

function AIDemo() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-white py-40"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-slate-200/40 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-slate-500">
            AI ENGINE
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900 md:text-7xl">
            Intelligence that
            <br />
            understands careers.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-600">
            Synelix AI evaluates resumes, predicts job compatibility,
            identifies missing skills and recommends the best opportunities.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 rounded-[40px] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,.08)]"
        >

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Resume */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl bg-slate-50 p-8"
            >

              <div className="mb-8 flex items-center gap-3">
                <div className="rounded-xl bg-black p-3 text-white">
                  <FileText size={26} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Resume Analysis
                  </h3>

                  <p className="text-slate-500">
                    AI is scanning profile...
                  </p>
                </div>
              </div>

              {[
                ["Java", "95%"],
                ["Spring Boot", "90%"],
                ["React", "84%"],
                ["Communication", "88%"],
                ["Problem Solving", "96%"],
              ].map(([skill, value], index) => (
                <div key={index} className="mb-6">

                  <div className="mb-2 flex justify-between">
                    <span>{skill}</span>
                    <span>{value}</span>
                  </div>

                  <div className="h-3 rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: value }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * .2,
                      }}
                      className="h-3 rounded-full bg-black"
                    />
                  </div>

                </div>
              ))}

            </motion.div>

            {/* AI Result */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl bg-black p-8 text-white"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white p-3 text-black">
                  <Brain size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    AI Recommendation
                  </h3>

                  <p className="text-slate-400">
                    Candidate Analysis
                  </p>
                </div>

              </div>

              <motion.h1
                initial={{ scale: .7 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: .8 }}
                className="mt-14 text-7xl font-black"
              >
                96%
              </motion.h1>

              <p className="mt-3 text-xl text-slate-300">
                Match Score
              </p>

              <div className="mt-12 space-y-4">

                <div className="flex justify-between rounded-2xl bg-white/10 px-6 py-4">
                  <span>ATS Ready</span>
                  <span>✓</span>
                </div>

                <div className="flex justify-between rounded-2xl bg-white/10 px-6 py-4">
                  <span>Verified Skills</span>
                  <span>24</span>
                </div>

                <div className="flex justify-between rounded-2xl bg-white/10 px-6 py-4">
                  <span>Recommended Jobs</span>
                  <span>137</span>
                </div>

              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-12 flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black"
              >
                <Sparkles size={20} />
                Generate Report
              </motion.button>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AIDemo;