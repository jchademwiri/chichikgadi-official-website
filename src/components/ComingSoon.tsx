import Link from 'next/link';

const ComingSoon = () => {
  return (
    <section className='grid h-screen place-items-center text-center mx-10 text-slate-200 '>
      <div>
        <h1 className='md:text-8xl text-4xl font-bold py-6'>
          UNDER <br /> CONSTRUCTION
        </h1>
        <p className='md:text-4xl text-2xl py-2 md:py-4  font-thin tracking-wider'>
          SITE NEARLY READY
        </p>
        <div className='h-2 rounded-full w-full bg-primary my-2'>
          <div className='h-2 rounded-full w-3/4 bg-acccent'></div>
        </div>
        <h2 className='py-2 md:text-3xl text-xl font-semibold'>
          Contact us Now
        </h2>
        <div className='py-2 md:py-4 grid md:grid-cols-2'>
          <Link className='py-1 hover:text-acccent' href='tel:+27796787198'>
            +27 (0)79 678 7198
          </Link>
          <Link
            className='py-1 hover:text-acccent'
            href='mailto:brianm@tradinginglory.co.za'
          >
            brianm@tradinginglory.co.za
          </Link>
        </div>
      </div>
      <footer className='md:my-5 my-10 py-5'>
        <p>
          © Powered and secured by{' '}
          <Link
            title='We Would Love to work with your business, call us now '
            href={`https://www.playhousemedia.net/`}
            className='text-acccent hover:text-primary'
          >
            Playhouse Media Group
          </Link>
        </p>
      </footer>
    </section>
  );
};
export default ComingSoon;
