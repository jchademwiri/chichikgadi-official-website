import ProjectCard from '@/components/ProjectCard';

const projects: Project[] = [
  {
    category: 'Civil Engineering',
    date: 'Jun 2020',
    client: 'City of Tswane',
    title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
  },
  {
    category: 'General Building',
    date: 'Sep 2022',
    client: 'City of Ekurhuleni',
    title: 'New Project Name fashion axe chia unicorn',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
  },
  {
    category: 'Plant Hire',
    date: 'Feb 2022',
    client: 'City of Mbombela',
    title: 'New Project Name in Plant Hire',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='min-h-[90vh]'>
      <section className='flex py-24 md:flex-row flex-col items-center max-w-6xl mx-auto w-[90%]'>
        <div className='py-24'>
          <div className='-my-8 divide-y-2 divide-muted-foreground'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Projects;
