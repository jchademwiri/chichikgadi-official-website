import ClientLogos from '@/components/ClientLogos';
import ServiceCard from '@/components/ServiceCard';
import { Building2, FolderKanban, Waves } from 'lucide-react';

const Services = () => {
  return (
    <section id='services' className='min-h-[90vh]'>
      <div className='flex flex-wrap max-w-6xl mx-auto my-5 w-[90%]'>
        <section className='flex flex-wrap'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h2 className='text-xs text-primary/80 tracking-widest font-medium uppercase mb-1'>
              your trusted partner for comprehensive solutions
            </h2>
            <h1 className='sm:text-3xl text-2xl font-medium'>
              Services We Offer
            </h1>
          </div>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-2'>
            <ServiceCard
              icon={<Waves />}
              title='Water & Sanitation'
              description='We are committed to providing sustainable water and sanitation solutions to ensure clean, safe, and reliable access to these essential resources. Our expertise extends from water treatment and distribution to wastewater management, improving the quality of life for communities and businesses.'
            />
            <ServiceCard
              icon={<Building2 />}
              title='Building Construction'
              description='Our skilled team of professionals excels in delivering top-notch construction services. From residential to commercial projects, we bring your vision to life with precision, quality, and innovation. We understand that every structure tells a story, and we are here to help you create yours.'
            />
            <ServiceCard
              icon={<Building2 />}
              title='Civil Engineering'
              description='With a foundation in sound engineering principles, we undertake civil engineering projects that stand the test of time. Our services cover a wide spectrum, including road infrastructure, bridges, and more. We pride ourselves on excellence in design and execution, ensuring safe and efficient solutions.'
            />
            <ServiceCard
              icon={<FolderKanban />}
              title='Project Management'
              description='Effective project management is the key to success. We offer end-to-end project management services that keep your projects on track, on time, and within budget. Our experienced professionals ensure seamless coordination, communication, and problem-solving, turning your ideas into reality.'
            />
          </div>
        </section>
      </div>
      {/* <ClientLogos /> */}
    </section>
  );
};
export default Services;
