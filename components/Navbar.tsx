import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="header">
    <nav className="nav">
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/assets/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
    </nav>
  </header>
  )
}
export default Navbar;