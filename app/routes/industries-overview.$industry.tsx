import { useParams } from "@remix-run/react";
import Navigation from "~/components/Navigation";
import { industries } from "~/data/industries";

export default function IndustryDetail() {
  const { industry } = useParams();
  const industryData = industries.find(i => i.id === industry);

  if (!industryData) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          {industryData.name} Consulting Firms
        </h1>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">
              Top Consulting Firms in {industryData.name}
            </h2>
            {/* Placeholder for firms list - to be implemented */}
            <div className="mt-4 text-gray-500">
              Content for {industryData.name} consulting firms will be displayed here
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}