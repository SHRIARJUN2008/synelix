import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun K",
    role: "Computer Science Student",
    quote:
      "Synelix helped me identify missing skills and improve my resume. Within weeks, I was interview-ready.",
  },
  {
    name: "Priya Menon",
    role: "Placement Officer",
    quote:
      "The analytics dashboard gave us valuable insights into student readiness and placement performance.",
  },
  {
    name: "Rahul Nair",
    role: "HR Manager",
    quote:
      "Finding qualified candidates became much faster with AI-powered skill matching. It saved our recruitment team hours.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-50 py-36">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-slate-500">
            TESTIMONIALS
          </p>

          <h2 className="mt-5 text-6xl font-black text-slate-900">
            Loved by Every User.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
            Students, institutions and recruiters trust Synelix to make
            career decisions smarter.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-[36px] bg-white p-10 shadow-lg transition-all duration-500"
            >
              <Quote className="text-slate-300" size={42} />

              <p className="mt-8 text-lg leading-8 text-slate-600">
                "{item.quote}"
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;