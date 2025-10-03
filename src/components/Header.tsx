import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-apple-light-gray/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-apple-black">
              Manuals
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;