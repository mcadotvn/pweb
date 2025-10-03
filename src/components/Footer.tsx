import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-apple-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center text-sm text-apple-gray">
          <p>&copy; {new Date().getFullYear()} Manuals. All rights reserved.</p>
          <Link href="/legal" className="hover:text-apple-black">
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;