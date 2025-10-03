import Link from 'next/link';
import Image from 'next/image';
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
      <h1 className="text-4xl font-bold text-apple-black mb-12 text-center">
        {brand.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {brand.products.map((product) => (
          <Link
            key={product.id}
            href={`/brands/${params.brandName}/${product.id}`}
            className="group block"
          >
            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-white">
              <Image
                src={product.imageUrl}
                alt={product.model}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-apple-black">
              {product.model}
            </h3>
            <p className="mt-1 text-md text-apple-gray">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}