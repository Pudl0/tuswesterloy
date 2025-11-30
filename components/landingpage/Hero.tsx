export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center blur-xs"
      >
        <source src="/videos/Image-TuS-Westerloy-e-V-1080p.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content - Text Only */}
      <div className="relative z-10 flex h-full flex-col justify-center px-4 md:px-12 lg:px-24">
        <div className="flex flex-col gap-6 md:gap-12">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
            TuS Westerloy
          </h1>
          <div className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span>MEIN DORF. MEIN VEREIN.</span>
          </div>
        </div>
      </div>

      {/* Animated Down Arrow */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-10 w-10 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
