import Link from 'next/link';
import manuals from '../../data/manuals.json';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-apple-black mb-4">
        Find Your Manual
      </h1>
      <p className="text-xl text-apple-gray mb-12">
        The ultimate resource for product guides and instructions.
      </p>
      <div className="max-w-2xl mx-auto mb-16">
        <div className="relative flex items-center">
          {/* TODO: Implement search functionality */}
          <input
            type="text"
            placeholder="Search for a brand or product..."
            className="w-full p-4 pl-12 border border-gray-300 rounded-full bg-white text-lg focus:ring-2 focus:ring-apple-blue focus:border-transparent transition"
            disabled
          />
          <div className="absolute left-4">
            <svg
              style={{ width: '24px', height: '24px' }}
              className="text-apple-gray"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-apple-black mb-8">
          Browse by Brand
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {manuals.brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/brands/${brand.name.toLowerCase()}`}
              className="group block"
            >
              <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:border-apple-blue transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-apple-black">
                  {brand.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}