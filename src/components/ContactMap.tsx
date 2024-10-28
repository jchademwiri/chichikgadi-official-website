import Link from 'next/link';
import ContactForm from './ContactForm';

const ContactMap = () => {
  const googleMap =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1741058416565!2d28.240921175379896!3d-25.79782957732925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95612576d0b9fb%3A0x555ef5240aaa3c36!2s276%20Jupiter%20St%2C%20Waterkloof%20Ridge%2C%20Pretoria%2C%200181!5e0!3m2!1sen!2sza!4v1698463349005!5m2!1sen!2sza';
  return (
    <div className='mx-auto w-full flex md:flex-nowrap flex-wrap'>
      <div className='lg:w-2/3 md:w-1/2 bg-muted-foreground/50 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
        <iframe
          width='100%'
          height='100%'
          className='absolute inset-0'
          title='map'
          src={googleMap}
          // style={`filter: grayscale(1) contrast(1.2) opacity(0.4)`}
        ></iframe>

        <div className='relative flex w-full flex-wrap bg-secondary/90 py-6 rounded shadow-md'>
          <div className='lg:w-1/2 px-6'>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs'>
              ADDRESS
            </h2>
            <p className='mt-1'>
              276 Jupiter Street, Waterkloof Ridge, Pretoria, 0181
            </p>
          </div>
          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs'>
              EMAIL
            </h2>

            <Link
              href='mailto:info@chichikdi.co.za'
              className='text-primary leading-relaxed'
            >
              info@chichikdi.co.za
            </Link>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs mt-4'>
              PHONE
            </h2>

            <Link href='tel:+27646566725' className='leading-relaxed'>
              064-656-6725
            </Link>
          </div>
        </div>
      </div>
      <div className='lg:w-1/3 md:w-1/2 p-6 flex flex-col border rounded-lg md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
        <h2 className='text-muted-foreground text-xl mb-1 font-medium'>
          Contact us today.
        </h2>
        <p className='leading-relaxed mb-5 text-muted-foreground'>
          We would like to hear from you. Contact us below and we will get back
          to you as soon as possible.
        </p>
        <ContactForm />
        <p className='text-xs text-muted-foreground/50 mt-3'>
          We will not share any of your information with any third-party
          comapnies or organisation.
        </p>
      </div>
    </div>
  );
};
export default ContactMap;
