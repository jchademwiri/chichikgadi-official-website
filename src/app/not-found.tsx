import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className='grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-pribg-primary'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-muted-foreground sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-muted-foreground'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button>
            <Link href='/'>Go back home</Link>
          </Button>
          <Button variant={'link'}>
            <Link
              href='https://wa.me/27740491433'
              className='text-sm font-semibold'
            >
              Contact support <span aria-hidden='true'>&rarr;</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
};
export default NotFound;
