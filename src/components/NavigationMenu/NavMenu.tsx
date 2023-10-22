import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
import { Menu } from './Menu';
import { MobileMenu } from './MobileNav';
import Image from 'next/image';
import { logo } from '@/data/images';

const NavMenu = () => {
  return (
    <nav className='flex justify-between items-center py-4 max-w-6xl mx-auto w-[90%]'>
      <Link href='/' className='font-semibold'>
        <Image
          src={logo}
          alt='chichikgadi logo'
          width={2805}
          height={835}
          className='w-auto h-14'
        />
      </Link>
      <div className='flex items-center gap-1'>
        <div className='hidden md:block'>
          <Menu />
        </div>
        <div className='md:hidden'>
          <MobileMenu />
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
export default NavMenu;
