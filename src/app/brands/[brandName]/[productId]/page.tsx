import manuals from '../../../../../data/manuals.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { brandName: string; productId: string };
}): Promise<Metadata> {
  const brand = manuals.brands.find(
    (b) => b.name.toLowerCase() === params.brandName.toLowerCase()
  );
  const product = brand?.products.find((p) => p.id === params.productId);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for could not be found.',
    };
  }

  return {
    title: `${product.model} Manual`,
    description: `Find and download the user manual for the ${product.model}.`,
  };
}

export default function ProductPage({
  params,
}: {
  params: { brandName: string; productId: string };
}) {
  const brand = manuals.brands.find(
    (b) => b.name.toLowerCase() === params.brandName.toLowerCase()
  );

  const product = brand?.products.find((p) => p.id === params.productId);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${product.model}`,
    description: `Find and download the user manual for the ${product.model}.`,
    step: [
      {
        '@type': 'HowToStep',
        name: 'Download the manual',
        text: `Download the official user manual for the ${product.model} from the manufacturer's website.`,
        url: product.manualUrl,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl bg-white">
          <Image
            src={product.imageUrl}
            alt={product.model}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-apple-black mb-2">{product.model}</h1>
          <p className="text-xl text-apple-gray mb-8">{product.category}</p>
          <a
            href={product.manualUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-apple-blue text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-center"
          >
            View Manual
          </a>
          <div className="mt-8">
            <Link href={`/brands/${params.brandName}`} className="text-apple-blue hover:underline">
              &larr; Back to {brand?.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}