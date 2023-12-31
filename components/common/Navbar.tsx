import Link from 'next/link'

export default function Navbar() {
  return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/">
              <a className="flex">
                <img className="h-8 w-8" src="./logo.png" alt="Logo" />
                <span>FanVentures</span>
              </a>
            </Link>

            {/* Navigation Items */}
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Explore</a>
                <Link href="/campaign">
                  <a className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Start Campaign</a>
                </Link>
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Marketplace</a>
                <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
    );
}