import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Club Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">TuS Westerloy e.V.</h3>
            <p className="text-gray-400">
              Dein Sportverein für die ganze Familie
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#documents"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Dokumente
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TuS Westerloy e.V. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
