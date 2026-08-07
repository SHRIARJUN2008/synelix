import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  School,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "For Students",
    description:
      "Build an AI-powered profile, analyze your resume, discover skill gaps and get matched with dream opportunities.",
    bg: "bg-white",
  },
  {
    icon: School,
    title: "For Institutions",
    description:
      "Track placements, monitor student performance and gain AI insights to improve career outcomes.",
    bg: "bg-slate-50",
  },
  {
    icon: Building2,
    title: "For Companies",
    description:
      "Hire verified talent faster using intelligent resume analysis and AI candidate ranking.",
    bg: "bg-black text-white",
  },
];

function FeatureCards() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.35em] text-slate-500">
            ONE PLATFORM
          </p>

          <h2 className="mt-5 text-6xl font-black">
            Three Experiences.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            Designed for every stakeholder in the recruitment ecosystem.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className={`${card.bg}
                  group
                  rounded-[36px]
                  p-10
                  shadow-xl
                  transition-all
                  duration-500`}
              >

                <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-slate-100 group-hover:rotate-6">

                  <Icon
                    size={34}
                    className="text-black"
                  />

                </div>

                <h3 className="mt-10 text-4xl font-bold">
                  {card.title}
                </h3>

                <p className="mt-6 leading-8 opacity-80">
                  {card.description}
                </p>

                <button className="mt-10 flex items-center gap-2 font-semibold">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </button>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default FeatureCards;