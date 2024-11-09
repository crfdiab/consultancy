import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import { industries } from "~/data/industries";

export const meta: MetaFunction = () => {
  return [
    { title: "Consultancy Directory - Find Top Consulting Firms Worldwide" },
    { name: "description", content: "Directory of top consulting firms across industries and countries" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Global Consultancy Directory
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Find top consulting firms across industries worldwide
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Industries</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {industries.slice(0, 6).map((industry) => (
                <Link
                  key={industry.id}
                  to={industry.path}
                  className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
                    <div className="mt-4 flex items-center text-indigo-600">
                      <span>View firms</span>
                      <span className="ml-2" aria-hidden="true">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                to="/industries-overview"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View All Industries
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}