import CardsComponent from '@/components/CardsComponent';

const Featured = () => {
  return (
    <section
      id='featured'
      className='min-h-[90vh] grid place-items-center py-16'
    >
      <div className='flex flex-wrap max-w-6xl mx-auto w-[90%]'>
        <CardsComponent />
      </div>
    </section>
  );
};
export default Featured;
