import {
  About,
  Contact,
  Featured,
  Hero,
  Projects,
  Services,
} from '@/components/Sections';

const Home = () => {
  return (
    <section className='overflow-hidden'>
      <div className='relative h-full w-full'>
        <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
        <div className='absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' />
      </div>
      <Hero />
      <Featured />
      <Services />
      <Projects />
      <About />
      <Contact />
    </section>
  );
};
export default Home;
