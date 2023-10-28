import CardsComponent from '@/components/CardsComponent';
import ClientLogos from '@/components/ClientLogos';

const Services = () => {
  return (
    <section id='services' className='min-h-[90vh] py-16'>
      <div className='flex flex-wrap max-w-6xl mx-auto w-[90%]'>
        <CardsComponent />
        <ClientLogos />
      </div>
    </section>
  );
};
export default Services;
