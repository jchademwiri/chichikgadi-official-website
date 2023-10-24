import CardsComponent from '@/components/CardsComponent';

const About = () => {
  return (
    <section id='about' className='min-h-[90vh] py-16 grid place-items-center'>
      <div className='flex flex-wrap max-w-6xl mx-auto w-[90%]'>
        <CardsComponent />
      </div>
    </section>
  );
};
export default About;
