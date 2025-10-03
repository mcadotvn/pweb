import Link from 'next/link';
import manuals from '../../../../data/manuals.json';
import { notFound } from 'next/navigation';

export default function BrandPage({ params }: { params: { brandName: string } }) {
  const brand = manuals.brands.find(
    (b) => b.name.toLowerCase() === params.brandName.toLowerCase()
  );

  if (!brand) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{brand.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brand.products.map((product) => (
          <Link
            key={product.id}
            href={`/brands/${params.brandName}/${product.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{product.model}</h2>
            <p className="text-gray-600">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}