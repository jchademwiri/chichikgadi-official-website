import Link from 'next/link';
import { Button } from './ui/button';
import { Card } from './ui/card';

const CardsComponent = () => {
  return (
    <section className='flex flex-wrap max-w-6xl mx-auto my-5'>
      <div className='flex flex-col text-center w-full mb-20'>
        <h2 className='text-xs text-primary tracking-widest font-medium title-font mb-1'>
          ROOF PARTY POLAROID
        </h2>
        <h1 className='sm:text-3xl text-2xl font-medium'>
          Master Cleanse Reliac Heirloom
        </h1>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
        <Card className='p-4'>
          <div className=''>
            <div className='flex items-center mb-3'>
              <Button size={'icon'} className='rounded-full mr-3 w-8 h-8'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                </svg>
              </Button>
              <h2 className='text-lg title-font font-medium'>Shooting Stars</h2>
            </div>
            <div className='flex-grow'>
              <p className='leading-relaxed text-base text-muted-foreground'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <Button variant={'link'} className='px-0'>
                <Link href='/' className='inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </Card>
        <Card className='p-4'>
          <div className=''>
            <div className='flex items-center mb-3'>
              <Button size={'icon'} className='rounded-full mr-3 w-8 h-8'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </svg>
              </Button>
              <h2 className=' text-lg font-medium'>The Catalyzer</h2>
            </div>
            <div className='flex-grow'>
              <p className='leading-relaxed text-base text-muted-foreground'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <Button variant={'link'} className='px-0'>
                <Link
                  href='/'
                  className='mt-3 text-primary inline-flex items-center'
                >
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </Card>
        <Card className='p-4'>
          <div className=''>
            <div className='flex items-center mb-3'>
              <Button size={'icon'} className='rounded-full mr-3 w-8 h-8'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-5 h-5'
                  viewBox='0 0 24 24'
                >
                  <circle cx='6' cy='6' r='3'></circle>
                  <circle cx='6' cy='18' r='3'></circle>
                  <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                </svg>
              </Button>
              <h2 className=' text-lg title-font font-medium'>Neptune</h2>
            </div>
            <div className='flex-grow'>
              <p className='leading-relaxed text-base text-muted-foreground'>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
              </p>
              <Button variant={'link'} className='px-0'>
                <Link href='/' className='mt-3 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default CardsComponent;
