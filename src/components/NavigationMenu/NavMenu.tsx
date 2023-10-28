import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
import { Menu } from './Menu';
import { MobileMenu } from './MobileNav';
import Image from 'next/image';
import { logoIcon } from '@/data/images';

const NavMenu = () => {
  return (
    <nav className=' sticky top-0 bg-background  z-50  py-4  '>
      <div className='flex justify-between items-center mx-auto w-[90%] max-w-6xl'>
        <Link href='/#home' className='font-semibold'>
          <Image
            src={logoIcon}
            alt='chichikgadi logo'
            width={738}
            height={741}
            className='w-auto h-10'
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
      </div>
    </nav>
  );
};
export default NavMenu;
