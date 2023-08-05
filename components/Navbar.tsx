import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>

          <Link href="/" className="flex justify-center items-center">
            <span>Sign in</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
