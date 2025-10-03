import Link from 'next/link';
import manuals from '../../data/manuals.json';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">
        Find Your Product Manual
      </h1>
      <div className="mb-8">
        {/* TODO: Implement search functionality */}
        <input
          type="text"
          placeholder="Search for a brand or product..."
          className="w-full p-4 border rounded-lg"
          disabled
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {manuals.brands.map((brand) => (
          <Link
            key={brand.name}
            href={`/brands/${brand.name.toLowerCase()}`}
            className="block p-4 border rounded-lg text-center hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{brand.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}