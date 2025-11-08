'use client';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 3xl:pt-40 4k:pt-60 pb-32 sm:pb-36 lg:pb-40 3xl:pb-48 4k:pb-64 overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#dbe9ff]">
      {/* --- CONTENT --- */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4k:max-w-[3200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 3xl:px-16 4k:px-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 3xl:gap-28 4k:gap-40 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 3xl:space-y-10 4k:space-y-16 max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl">
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] 2xl:text-[3.75rem] 3xl:text-[4.5rem] 4k:text-[7rem] leading-[1.15] font-bold">
              <span className="block text-gray-900">Relocate To Sweden</span>
              <span className="block text-blue-600">With an Expert Advise</span>
            </h1>

            <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-base xl:text-[16.5px] 3xl:text-[19px] 4k:text-[2rem] text-gray-600 leading-[1.65] max-w-xl 3xl:max-w-2xl 4k:max-w-5xl">
              We provide comprehensive relocation and immigration support for individuals,
              employees, and companies, covering residence permits, housing, school placements,
              and integration — all seamlessly managed through our secure web and mobile platform
              across Sweden, Denmark, and the wider Nordic region.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-3.5 3xl:gap-5 4k:gap-8 pt-1">
              <button className="px-6 sm:px-7 md:px-8 3xl:px-12 4k:px-20 py-2.5 sm:py-3 md:py-3.5 3xl:py-5 4k:py-8 text-[13px] sm:text-sm md:text-[15px] 3xl:text-lg 4k:text-3xl text-white bg-black rounded-md hover:bg-gray-800 transition-all duration-300">
                Our Services
              </button>
              <button className="px-6 sm:px-7 md:px-8 3xl:px-12 4k:px-20 py-2.5 sm:py-3 md:py-3.5 3xl:py-5 4k:py-8 text-[13px] sm:text-sm md:text-[15px] 3xl:text-lg 4k:text-3xl text-white bg-black border-2 4k:border-4 border-black rounded-md hover:bg-gray-800 transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - VIDEO (SIMPLE VERSION) */}
          <div className="relative w-full max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl mx-auto lg:mx-0 mt-8 lg:mt-0">
            
            {/* Simple video frame - just like the link */}
            <div className="relative">
              {/* Simple border container */}
              <div className="relative rounded-2xl sm:rounded-3xl 3xl:rounded-[2.5rem] 4k:rounded-[4rem] border-[3px] sm:border-[3px] 3xl:border-[4px] 4k:border-[6px] border-blue-600 overflow-hidden shadow-2xl bg-blue-600">
                {/* Video container */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://share.synthesia.io/embeds/videos/7ffc5155-81ff-4153-b235-6fa60d54a4ef"
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ border: 'none' }}
                    title="Immigration & Relocation"
                  />
                </div>
              </div>
              
              {/* Small badge on top */}
              <div className="absolute -top-2.5 sm:-top-3 md:-top-4 3xl:-top-5 4k:-top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-blue-600 text-white text-[9px] sm:text-[10px] md:text-xs 3xl:text-sm 4k:text-xl px-3 sm:px-4 md:px-6 3xl:px-8 4k:px-12 py-1 sm:py-1.5 md:py-2 3xl:py-2.5 4k:py-4 rounded-full shadow-lg whitespace-nowrap uppercase tracking-wide">
                  Immigration & Relocation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTLE SMOOTH WAVE - Exactly like second reference */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[120px] sm:h-[140px] lg:h-[160px] 3xl:h-[200px] 4k:h-[280px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <path
            d="M0,50 C360,80 720,80 1080,50 C1260,35 1350,20 1440,20 L1440,100 L0,100 Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M0,60 C360,90 720,90 1080,60 C1260,45 1350,30 1440,30 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}