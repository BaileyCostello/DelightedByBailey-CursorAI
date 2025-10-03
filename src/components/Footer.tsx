import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Delighted By Bailey</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Senior UX & Product Designer creating delightful digital experiences 
              that solve real problems and bring joy to users.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/baileycostello"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/baileycostello"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dribbble
              </a>
              <a
                href="mailto:hello@delightedbybailey.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-300 hover:text-white transition-colors">
                  My Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Case Studies</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/case-studies/an-lesson-planning" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AN Lesson Planning Assistant
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies/cdg-maintenance" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  CDG Maintenance Management App
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bailey Costello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
