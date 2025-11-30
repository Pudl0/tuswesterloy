export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-4xl font-bold text-primary md:text-5xl">Über uns</h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Willkommen beim TuS Westerloy e.V. – Ihrem Sportverein für die ganze Familie!
            Seit vielen Jahren sind wir ein fester Bestandteil unserer Gemeinde und bieten
            ein vielfältiges Sportangebot für alle Altersgruppen.
          </p>
          <p>
            Unser Verein steht für Gemeinschaft, Fairplay und Leidenschaft für den Sport.
            Ob Fußball, Hallensport oder Flag Football – bei uns findet jeder die passende
            sportliche Herausforderung.
          </p>
          <p>
            <strong>Mein Dorf. Mein Verein.</strong> – Dieser Leitsatz prägt unsere Vereinskultur
            und zeigt, wie wichtig uns der Zusammenhalt in unserer Gemeinschaft ist.
          </p>
        </div>
        <div className="mt-10">
          <a
            href="#documents"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Mitmachen
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
