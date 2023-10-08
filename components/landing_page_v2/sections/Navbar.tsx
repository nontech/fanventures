import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
      <nav className="mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Image  
              src="/logo.svg" 
              alt="Logo" 
              width={250}
              height={70}
            />

            {/* Navigation Items */}
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-sm font-medium">About</a>
                <a href="#" className="text-sm font-medium">Overview</a>
                <a href="#" className="text-sm font-medium">Features</a>
                <a href="#" className="text-sm font-medium">Pricing</a>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
    );
}