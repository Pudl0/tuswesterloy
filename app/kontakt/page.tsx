export default function Kontakt() {
  return (
    <main className="min-h-screen bg-white px-4 py-24 md:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold text-primary md:text-5xl">Kontakt</h1>

        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary">TuS Westerloy e.V.</h2>
            <p className="mb-2">
              <strong>Adresse:</strong><br />
              An der Biese 25<br />
              26655 Westerloy
            </p>
            <p className="mb-2">
              <strong>Email:</strong><br />
              <a href="mailto:kontakt@tuswesterloy.de" className="text-primary hover:underline">
                kontakt@tuswesterloy.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
