import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Consultancy
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/industries-overview" className="text-gray-700 hover:text-gray-900">Industries</Link>
            <Link to="/firms" className="text-gray-700 hover:text-gray-900">Companies</Link>
            <Link to="/countries" className="text-gray-700 hover:text-gray-900">Countries</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}