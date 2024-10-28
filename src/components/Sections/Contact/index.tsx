import CardsComponent from '@/components/CardsComponent';
import ContactCard from '@/components/ContactCard';
import ContactMap from '@/components/ContactMap';
import { Mail, Map, Briefcase, MoveUp, Phone } from 'lucide-react';

const Contact = () => {
  const googleMap =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1729973981214!2d32.62431756729264!3d-18.967965726169698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x192ceb2990bf0beb%3A0x1c44c83d085dd244!2sPlayhouse%20Media%20Group!5e0!3m2!1sen!2sza!4v1698135371217!5m2!1sen!2sza';
  return (
    <section id='contact' className='min-h-[90vh] py-16'>
      <div className='gap-5 max-w-6xl mx-auto w-[90%] '>
        <section className='my-8 grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3'>
          <ContactCard
            href='tel:+27646566725'
            title='Phone Number'
            description='064-656-6725'
            icon={<Phone size={50} />}
          />
          <ContactCard
            href='tel:+27740491433'
            title='Email Address'
            description='info@chichikdi.co.za'
            icon={<Mail size={50} />}
          />
          <ContactCard
            href='https://maps.app.goo.gl/7SaDpEh1Z654FVNZA'
            title='Physical Address'
            description='276 Jupiter Street, Waterkloof Ridge, Pretoria, 0181'
            icon={<Map size={50} />}
          />

          <div className='hidden sm:grid place-items-center gap-5 rounded bg-secondary py-10 px-5 md:hidden'>
            <Briefcase size={30} />
            <h3 className=' text-lg font-medium'>
              Let us work together on your next project.
            </h3>
          </div>
        </section>
        <ContactMap />
      </div>
    </section>
  );
};
export default Contact;
