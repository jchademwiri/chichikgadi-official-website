import Image from 'next/image';
import { Button } from '../ui/button';

const MyHero = () => {
  return (
    <section className=''>
      <div className='relative h-full w-full'>
        <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
        <div className='absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
      </div>
      <div className='flex px-5 py-24 md:flex-row flex-col items-center max-w-6xl mx-auto w-[90%] '>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-foreground'>
            Before they sold out
            <br className='hidden lg:inline-block' />
            readymade gluten
          </h1>
          <p className='mb-8 leading-relaxed text-muted-foreground'>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className='flex justify-center gap-4'>
            <Button size={'lg'}>Action Button One</Button>
            <Button size={'lg'} variant={'secondary'}>
              Action Button Two
            </Button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2'>
          <Image
            className='object-cover object-center rounded'
            alt='hero'
            // src='https://dummyimage.com/720x600'
            src='https://images.pexels.com/photos/8276364/pexels-photo-8276364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};
export default MyHero;
