import ProjectCard from '@/components/ProjectCard';
import { projects } from './projects';

const Projects = () => {
  return (
    <section id='projects' className='min-h-[90vh] py-10'>
      <section className='max-w-6xl mx-auto w-[90%]'>
        <div className='text-center mx-auto mb-20 lg:w-1/2'>
          <h2 className='text-xs text-primary tracking-widest font-medium uppercase mb-1'>
            Completed and Current Projects
          </h2>
          <h1 className='sm:text-3xl text-2xl font-medium'>
            Our Experiance and Expeties
          </h1>
          <p className='text-muted-foreground py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            voluptates odio inventore iste rem maxime nesciunt, temporibus unde
            expedita ipsa.
          </p>
        </div>
        <div className=''>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </section>
  );
};
export default Projects;
