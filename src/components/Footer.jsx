function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col md:flex-row md:justify-between">

          <div>
            <h2 className="text-3xl font-bold">
              Synelix
            </h2>

            <p className="mt-4 max-w-md text-gray-400">
              AI-powered career intelligence platform connecting
              students, recruiters and institutions.
            </p>
          </div>

          <div className="mt-10 md:mt-0">

            <h3 className="font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-gray-400">

              <li>Home</li>

              <li>Features</li>

              <li>About</li>

              <li>Contact</li>

            </ul>

          </div>

        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
          © 2026 Synelix. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;