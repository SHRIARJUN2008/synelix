import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-500 ease-out

        ${
          scrolled
            ? "mt-3 bg-white/85 border-gray-200 shadow-2xl backdrop-blur-xl px-8 py-3"
            : "mt-6 bg-white/60 border-white/40 backdrop-blur-md px-10 py-4"
        }`}
      >
        {/* Logo */}
        <h1 className="cursor-pointer text-2xl font-bold tracking-tight transition-transform duration-300 hover:scale-110">
          Synelix
        </h1>

        {/* Navigation */}
        <nav className="hidden gap-10 md:flex">

          {["Home", "Features", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="group relative font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
            >
              {item}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </nav>

{/* Login Button */}
<Link
  to="/login"
  className="rounded-full bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800 active:scale-95"
>
  Login
</Link>        
      </div>
    </header>
  );
}

export default Navbar;