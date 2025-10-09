import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-white">Delighted By Bailey</h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Senior UX & Product Designer creating delightful digital experiences 
              that solve real problems and bring joy to users.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/baileycostello"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/baileycostello"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
              <a
                href="mailto:hello@delightedbybailey.com"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 font-medium"
              >
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                  My Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Case Studies</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/case-studies/an-lesson-planning" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  AN Lesson Planning Assistant
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies/cdg-maintenance" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 block"
                >
                  CDG Maintenance Management App
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Bailey Costello. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
