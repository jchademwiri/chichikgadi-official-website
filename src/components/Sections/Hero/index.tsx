import Image from 'next/image';
import { Button } from '../../ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='home' className='h-[90vh] grid place-items-center'>
      <div className='flex md:flex-row flex-col items-center max-w-6xl mx-auto w-[90%]'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-foreground'>
            About
            <br className='hidden lg:inline-block' />
            <span className='text-primary'>The Company</span>
          </h1>
          <p className='mb-8 leading-relaxed text-muted-foreground'>
            Chichikgadi offers Consulting engineering in water sciences, built
            environment and Project Management services. We are a 100% Black,
            woman & youth owned company with 6 years’ Experience. Our projects
            are mostly government projects from various Departments and
            Municipalities.
          </p>
          <div className='flex justify-center gap-4'>
            <Button size={'lg'}>
              <Link href='/#projects'>Chat With Us Now</Link>
            </Button>
            <Button size={'lg'} variant={'secondary'}>
              <Link href='/#projects'>See Our Projects</Link>
            </Button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2'>
          <Image
            className='object-cover object-center rounded'
            alt='hero'
            src='https://images.pexels.com/photos/8276364/pexels-photo-8276364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
