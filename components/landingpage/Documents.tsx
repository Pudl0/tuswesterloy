import Link from "next/link";

export default function Documents() {
  return (
    <section id="documents" className="scroll-mt-20 bg-white px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-4xl font-bold text-primary md:text-5xl">Dokumente</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/documents/Beitrittserklärung aktive Mitgliedschaft.pdf"
            target="_blank"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/20">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                Beitrittserklärung aktive Mitgliedschaft
              </h3>
              <p className="text-sm text-gray-500">PDF Dokument</p>
            </div>
            <svg
              className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/documents/Beitrittserklärung passive Mitgliedschaft.pdf"
            target="_blank"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/20">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                Beitrittserklärung passive Mitgliedschaft
              </h3>
              <p className="text-sm text-gray-500">PDF Dokument</p>
            </div>
            <svg
              className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/documents/Satzung des TuS Westerloy.pdf"
            target="_blank"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                Satzung des TuS Westerloy
              </h3>
              <p className="text-sm text-gray-500">PDF Dokument</p>
            </div>
            <svg
              className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <Link
            href="/documents/TuS Westerloy Vereinszeitschrift 2025.pdf"
            target="_blank"
            className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                Vereinszeitschrift 2025
              </h3>
              <p className="text-sm text-gray-500">PDF Dokument</p>
            </div>
            <svg
              className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
