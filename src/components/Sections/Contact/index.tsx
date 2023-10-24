import CardsComponent from '@/components/CardsComponent';
import ContactMap from '@/components/ContactMap';

const Contact = () => {
  const googleMap =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1729973981214!2d32.62431756729264!3d-18.967965726169698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x192ceb2990bf0beb%3A0x1c44c83d085dd244!2sPlayhouse%20Media%20Group!5e0!3m2!1sen!2sza!4v1698135371217!5m2!1sen!2sza';
  return (
    <section id='contact' className='min-h-[90vh] py-16'>
      <div className='flex gap-5 flex-wrap max-w-6xl mx-auto w-[90%] relative'>
        <CardsComponent />

        <ContactMap />
      </div>
    </section>
  );
};
export default Contact;
