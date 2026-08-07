import { ArrowRight, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative flex min-h-screen overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/40 blur-[180px]" />

      {/* Left Side */}
      <div className="relative hidden w-1/2 items-center justify-center bg-black lg:flex">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-md text-white"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-400">
            SYNELIX
          </p>

          <h1 className="text-6xl font-black leading-tight">
            Welcome
            <br />
            Back.
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-400">
            Continue your AI-powered career journey and unlock opportunities
            tailored to your skills.
          </p>

        </motion.div>

      </div>

      {/* Right Side */}
      <div className="relative flex flex-1 items-center justify-center px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md"
        >

          <h2 className="text-5xl font-black text-slate-900">
            Sign In
          </h2>

          <p className="mt-4 text-slate-500">
            Welcome back to Synelix.
          </p>

          {/* Email */}
          <div className="relative mt-10">

            <Mail
              className="absolute left-5 top-5 text-slate-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-2xl border border-slate-300 py-4 pl-14 pr-5 outline-none transition focus:border-black"
            />

          </div>

          {/* Password */}
          <div className="relative mt-5">

            <Lock
              className="absolute left-5 top-5 text-slate-400"
              size={20}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-2xl border border-slate-300 py-4 pl-14 pr-5 outline-none transition focus:border-black"
            />

          </div>

          <button
            className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-black py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
          >
            Continue

            <ArrowRight
              className="transition group-hover:translate-x-1"
              size={20}
            />

          </button>

          <button
            className="mt-4 w-full rounded-2xl border border-slate-300 py-4 font-medium transition hover:bg-slate-100"
          >
            Continue with Google
          </button>

          <p className="mt-10 text-center text-slate-500">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 font-semibold text-black"
            >
              Create one
            </Link>

          </p>

        </motion.div>

      </div>

    </div>
  );
}

export default Login;