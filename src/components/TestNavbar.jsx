function TestNavbar() {
  return (
    <nav className="flex items-center justify-between bg-black px-8 py-4 text-white">
      <h1 className="text-2xl font-bold">
        Synelix
      </h1>

      <div className="flex gap-8">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>

        <a href="#" className="hover:text-gray-300">
          Features
        </a>

        <a href="#" className="hover:text-gray-300">
          About
        </a>

        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </div>

      <button className="rounded-full bg-white px-5 py-2 font-semibold text-black">
        Login
      </button>
    </nav>
  );
}

export default TestNavbar;