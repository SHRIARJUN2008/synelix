import { ArrowRight, Lock, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/40 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-2xl"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          SYNELIX
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Create Account
        </h1>

        <p className="mt-3 text-slate-500">
          Start your AI-powered career journey.
        </p>

        {/* Name */}
        <div className="relative mt-10">
          <User className="absolute left-5 top-5 text-slate-400" size={20} />

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-2xl border border-slate-300 py-4 pl-14 pr-5 outline-none focus:border-black"
          />
        </div>

        {/* Email */}
        <div className="relative mt-5">
          <Mail className="absolute left-5 top-5 text-slate-400" size={20} />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-slate-300 py-4 pl-14 pr-5 outline-none focus:border-black"
          />
        </div>

        {/* Password */}
        <div className="relative mt-5">
          <Lock className="absolute left-5 top-5 text-slate-400" size={20} />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-300 py-4 pl-14 pr-5 outline-none focus:border-black"
          />
        </div>

        <button
          onClick={() => navigate("/select-role")}
          className="group mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
        >
          Continue

          <ArrowRight
            size={20}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </motion.div>

    </div>
  );
}

export default Register;