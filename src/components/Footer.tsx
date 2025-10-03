import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Manuals Aggregator. All rights reserved.</p>
        <Link href="/legal" className="text-gray-400 hover:text-white">
          Legal Disclaimer
        </Link>
      </div>
    </footer>
  );
};

export default Footer;