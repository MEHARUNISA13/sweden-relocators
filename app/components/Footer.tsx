'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1400px] 2xl:max-w-[1600px] 4k:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 4k:px-24">
        <div className="py-12 sm:py-16 lg:py-20 4k:py-32">
          
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 4k:gap-16 mb-8 sm:mb-12 4k:mb-16">
            
            {/* Column 1 - Company Info */}
            <div>
              <h3 className="text-lg sm:text-xl 4k:text-3xl font-bold mb-4 4k:mb-6">Sweden Relocators</h3>
              <p className="text-sm sm:text-base 4k:text-lg text-gray-400 leading-relaxed">
                Expert relocation and immigration support for individuals, employees, and companies.
              </p>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="text-base sm:text-lg 4k:text-2xl font-semibold mb-4 4k:mb-6 text-white">Services</h4>
              <ul className="space-y-2 4k:space-y-3 text-sm sm:text-base 4k:text-lg text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Residence Permits</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Housing Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">School Placement</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Integration Support</a></li>
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg 4k:text-2xl font-semibold mb-4 4k:mb-6 text-white">Quick Links</h4>
              <ul className="space-y-2 4k:space-y-3 text-sm sm:text-base 4k:text-lg text-gray-400">
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="/new-in-sweden" className="hover:text-blue-400 transition-colors">New in Sweden</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact & Social */}
            <div>
              <h4 className="text-base sm:text-lg 4k:text-2xl font-semibold mb-4 4k:mb-6 text-white">Contact</h4>
              <div className="space-y-3 4k:space-y-4 text-sm sm:text-base 4k:text-lg text-gray-400">
                <p>📧 info@swedenrelocators.com</p>
                <p>📞 +46 (0) XXX XXXX</p>
                <p>🇸🇪 Sweden, Denmark & Nordic Region</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8 sm:pt-10 4k:pt-16">
            
            {/* Bottom Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 4k:gap-6">
              <p className="text-xs sm:text-sm 4k:text-base text-gray-500">
                © 2025 Sweden Relocators. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 4k:gap-10">
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-xs sm:text-sm 4k:text-base">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-xs sm:text-sm 4k:text-base">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-xs sm:text-sm 4k:text-base">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
