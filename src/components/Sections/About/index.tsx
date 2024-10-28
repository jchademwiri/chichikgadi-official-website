import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className='min-h-[80vh] py-16 grid place-items-center'>
      <div className='flex flex-wrap max-w-6xl mx-auto w-[90%]'>
        <div className='mx-auto flex flex-wrap'>
          <div className='mb-auto lg:w-1/2 sm:w-2/3'>
            <div className='w-full mb-6 pr-4'>
              <h1 className='text-muted-foreground font-medium text-xl md:text-3xl mb-2'>
                About The Company
              </h1>
              <p className='leading-relaxed'>
                Chichikgadi offers Consulting engineering in water sciences,
                built environment and Project Management services. We are a 100%
                Black, woman & youth owned company with 6 years’ Experience. Our
                projects are mostly government projects from various Departments
                and Municipalities.
              </p>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              <div className='text-muted-foreground sm:w-1/2 lg:w-1/4 w-1/2 text-center'>
                <h2 className='title-font font-medium text-xl md:text-3xl'>
                  13
                </h2>
                <small className='leading-relaxed'>Satisfied Clients</small>
              </div>
              <div className='text-muted-foreground sm:w-1/2 lg:w-1/4 w-1/2 text-center'>
                <h2 className='title-font font-medium text-xl md:text-3xl'>
                  20
                </h2>
                <small className='leading-relaxed'>Qualified Engineers</small>
              </div>
              <div className='text-muted-foreground sm:w-1/2 lg:w-1/4 w-1/2 text-center'>
                <h2 className='title-font font-medium text-xl md:text-3xl'>
                  24
                </h2>
                <small className='leading-relaxed'>Completed Projects</small>
              </div>
              <div className='text-muted-foreground sm:w-1/2 lg:w-1/4 w-1/2 text-center'>
                <h2 className='title-font font-medium text-xl md:text-3xl'>
                  20
                </h2>
                <small className='leading-relaxed'>Qualified Engineers</small>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0'>
            <Image
              className='object-cover object-center w-auto h-full'
              src='https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='stats'
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
