export default function Impressum() {
  return (
    <main className="min-h-screen bg-white px-4 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold text-primary md:text-5xl">Impressum</h1>

        <div className="space-y-8 text-lg leading-relaxed text-gray-700">
          <div>
            <p className="mb-2">
              <strong>TuS Westerloy e.V.</strong><br />
              An der Biese 25<br />
              26655 Westerloy
            </p>
            <p>
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:kontakt@tuswesterloy.de" className="text-primary hover:underline">
                kontakt@tuswesterloy.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary">Vertretungsberechtigter Vorstand</h2>
            <div className="space-y-2">
              <p><strong>1. Vorsitzender:</strong> Peter Piepho</p>
              <p><strong>1. stellvertretender Vorsitzender:</strong> Stefan Schwengels</p>
              <p><strong>2. stellvertretender Vorsitzender:</strong> Deike Sperlich</p>
              <p><strong>Kassenwart:</strong> Remo Karius</p>
              <p><strong>Schriftführer:</strong> Philipp Benz</p>
              <p><strong>Mitgliederverwaltung:</strong> Stephan Martens</p>
              <p><strong>Beisitzer:</strong> Sandra Warntjen</p>
              <p><strong>Beisitzer:</strong> Markus Berg</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary">Registereintrag</h2>
            <p><strong>Registergericht:</strong> Amtsgericht Westerstede</p>
            <p><strong>Registernummer:</strong> VR 120009</p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary">Presse- und Öffentlichkeitsarbeit</h2>
            <p className="mb-4">
              Der TuS Westerloy e.V. stellt seine sportlichen Aktivitäten und Informationen über den
              Sportbetrieb unter anderem im Internetauftritt www.tuswesterloy.de dar.
            </p>
            <p className="mb-4">
              Es werden auch Fotos aus den einzelnen Sportarten veröffentlicht. Es werden nur ästhetisch
              ansprechende und unverfängliche Fotos publiziert. Sollten hierzu Einwände bestehen, sollten
              sie mit Betreten des Veranstaltungsortes ihre Einwände dem Vorstand mitteilen. Selbstverständlich
              können auch im Nachhinein beim Vorstand des TuS Westerloy e.V. Einwände mitgeteilt werden. Diese
              werden umgehend bearbeitet, und ggf. im gegenseitigen Einverständnis die Löschung des Artikels /
              des Bildes von der Internetseite erfolgen.
            </p>
            <p className="mb-2">Hierzu wenden Sie sich bitte schriftlich an die Geschäftsadresse:</p>
            <p className="mb-4">
              TuS Westerloy e.V.<br />
              An der Biese 25<br />
              26655 Westerloy
            </p>
            <p>
              oder per Email an{" "}
              <a href="mailto:presse@tuswesterloy.de" className="text-primary hover:underline">
                presse@tuswesterloy.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary">Haftungshinweis</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer
              Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
