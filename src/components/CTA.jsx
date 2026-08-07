import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="bg-black py-40 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black md:text-7xl"
        >
          Ready to shape
          <br />
          the future of careers?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-xl text-slate-400"
        >
          Join students, institutions and companies building a smarter
          recruitment ecosystem with AI.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          className="group mt-14 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-black transition"
        >
          Get Started

          <ArrowRight
            className="transition group-hover:translate-x-1"
            size={22}
          />
        </motion.button>

      </div>
    </section>
  );
}

export default CTA;