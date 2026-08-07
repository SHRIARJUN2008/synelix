import { motion } from "framer-motion";
import {
  Upload,
  BrainCircuit,
  BadgeCheck,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Your Resume",
    description:
      "Students upload resumes, projects and certifications in a secure digital profile.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI Understands Everything",
    description:
      "Our AI analyzes skills, identifies strengths, predicts missing competencies and recommends improvements.",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Get Matched Instantly",
    description:
      "Companies receive highly ranked candidates while students discover the most suitable opportunities.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-black py-40 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-slate-400">
            HOW IT WORKS
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            AI does the hard work.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-400">
            Three simple steps transform resumes into verified career
            opportunities using artificial intelligence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-28">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-white/10 lg:block"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .8,
                }}
                className={`relative mb-24 flex ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >

                <div className="w-full lg:w-[46%]">

                  <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/10">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black">
                      <Icon size={30} />
                    </div>

                    <p className="mt-8 text-sm tracking-[0.35em] text-slate-500">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                      {step.description}
                    </p>

                  </div>

                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-14 hidden -translate-x-1/2 lg:block">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,.35)]">
                    <ArrowDown size={22} className="text-black" />
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;