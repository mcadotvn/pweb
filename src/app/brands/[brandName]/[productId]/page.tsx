import manuals from '../../../../../data/manuals.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
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
      <h1 className="text-3xl font-bold mb-2">{product.model}</h1>
      <p className="text-xl text-gray-600 mb-4">{product.category}</p>
      <a
        href={product.manualUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        View Manual
      </a>
      <div className="mt-8">
        <Link href={`/brands/${params.brandName}`} className="text-blue-500 hover:underline">
          &larr; Back to {brand?.name}
        </Link>
      </div>
    </div>
  );
}