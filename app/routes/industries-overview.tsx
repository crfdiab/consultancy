import { Link } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import { industries } from "~/data/industries";

export default function IndustriesOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Industries Overview</h1>
          <p className="mt-4 text-xl text-gray-500">
            Browse consulting firms by industry
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              to={industry.path}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">{industry.name}</h2>
                <div className="mt-4 flex items-center text-indigo-600">
                  <span>View consulting firms</span>
                  <span className="ml-2" aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}