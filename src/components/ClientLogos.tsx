import { clients } from '@/data/clients';
import LogoComponent from './LogoComponent';

const ClientLogos = () => {
  return (
    <section className=' bg-secondary py-20'>
      <div className='max-w-6xl mx-auto w-[90%]'>
        <h2 className='text-center text-lg font-semibold leading-8 '>
          Trusted by the world’s most innovative teams
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {clients.map((client, index) => (
            <LogoComponent key={index} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ClientLogos;
