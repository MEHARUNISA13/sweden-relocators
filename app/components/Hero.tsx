'use client';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 3xl:pt-40 4k:pt-60 pb-36 sm:pb-40 lg:pb-44 3xl:pb-52 4k:pb-72 overflow-hidden bg-gradient-to-b from-white via-[#f9fbff] to-[#e7f1ff]">
      {/* --- CONTENT --- */}
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 3xl:max-w-[2000px] 4k:max-w-[3200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 3xl:px-16 4k:px-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 3xl:gap-28 4k:gap-40 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 3xl:space-y-10 4k:space-y-16 max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl">
            <h1 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.5rem] 2xl:text-[3.75rem] 3xl:text-[4.5rem] 4k:text-[7rem] leading-[1.15] font-bold">
              <span className="block text-gray-900">Relocate To Sweden</span>
              <span className="block text-blue-600">With an Expert Advise</span>
            </h1>

            <p className="text-sm sm:text-[15px] lg:text-base xl:text-[16.5px] 3xl:text-[19px] 4k:text-[2rem] text-gray-600 leading-[1.65] max-w-xl 3xl:max-w-2xl 4k:max-w-5xl">
              We provide comprehensive relocation and immigration support for individuals,
              employees, and companies, covering residence permits, housing, school placements,
              and integration — all seamlessly managed through our secure web and mobile platform
              across Sweden, Denmark, and the wider Nordic region.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 3xl:gap-5 4k:gap-8 pt-1">
              <button className="px-7 sm:px-8 3xl:px-12 4k:px-20 py-3 sm:py-3.5 3xl:py-5 4k:py-8 text-sm sm:text-[15px] 3xl:text-lg 4k:text-3xl text-white bg-black rounded-xl 3xl:rounded-2xl 4k:rounded-3xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Our Services
              </button>
              <button className="px-7 sm:px-8 3xl:px-12 4k:px-20 py-3 sm:py-3.5 3xl:py-5 4k:py-8 text-sm sm:text-[15px] 3xl:text-lg 4k:text-3xl text-black bg-white border-2 4k:border-4 border-black rounded-xl 3xl:rounded-2xl 4k:rounded-3xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - VIDEO (SIMPLE VERSION) */}
          <div className="relative w-full max-w-2xl 3xl:max-w-3xl 4k:max-w-6xl mx-auto lg:mx-0">
            
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
              <div className="absolute -top-3 sm:-top-4 3xl:-top-5 4k:-top-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-blue-600 text-white text-[10px] sm:text-xs 3xl:text-sm 4k:text-xl px-4 sm:px-6 3xl:px-8 4k:px-12 py-1.5 sm:py-2 3xl:py-2.5 4k:py-4 rounded-full shadow-lg whitespace-nowrap uppercase tracking-wide">
                  Immigration & Relocation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WAVE SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(120%+1.3px)] h-[60px] sm:h-[80px] lg:h-[100px] 3xl:h-[130px] 4k:h-[200px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44C211.14,71,105.57,64,0,46.29V120H1200V16.48c-105.14-12.63-209.71-8.38-321.39,16.52C729.63,59.75,625.06,87,518.61,89.51,412.17,92,415,39.14,321.39,56.44Z"
            fill="#e7f1ff"
          ></path>
        </svg>
      </div>
    </section>
  );
}