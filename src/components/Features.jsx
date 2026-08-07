import { Brain, FileCheck, Building2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Skill Analysis",
    description:
      "Our AI understands resumes, projects and certifications to identify strengths and skill gaps.",
  },
  {
    icon: FileCheck,
    title: "Resume Intelligence",
    description:
      "Receive detailed resume scoring, ATS compatibility and personalized improvement suggestions.",
  },
  {
    icon: Building2,
    title: "Smart Recruitment",
    description:
      "Companies instantly discover the most suitable candidates using AI powered matching.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description:
      "Students receive personalized learning paths and job recommendations based on real industry demand.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-36 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-slate-200/40 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            Why Synelix
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Everything.
            <br />
            Connected by AI.
          </h2>

          <p className="mt-8 text-xl leading-8 text-slate-600">
            Synelix connects students, recruiters and institutions into
            one intelligent ecosystem designed for the future of hiring.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .7,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-[36px] border border-white/60 bg-white/70 p-10 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white transition duration-500 group-hover:rotate-6">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;