import { GraduationCap, School, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SelectRole() {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Student",
      icon: GraduationCap,
      description:
        "Analyze your resume, discover skill gaps and get AI career recommendations.",
      path: "/student",
    },
    {
      title: "Institution",
      icon: School,
      description:
        "Monitor placements, student performance and institutional analytics.",
      path: "/institution",
    },
    {
      title: "Company",
      icon: Building2,
      description:
        "Discover AI-ranked candidates and streamline recruitment.",
      path: "/company",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-slate-500">
            STEP 2 OF 2
          </p>

          <h1 className="mt-5 text-6xl font-black">
            Choose Your Role
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
            Select how you'll use Synelix.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                onClick={() => navigate(role.path)}
                className="cursor-pointer rounded-[36px] bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon size={30} />
                </div>

                <h2 className="mt-8 text-3xl font-bold">
                  {role.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  {role.description}
                </p>

                <button className="mt-10 rounded-full bg-black px-6 py-3 text-white">
                  Continue
                </button>

              </motion.div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default SelectRole;