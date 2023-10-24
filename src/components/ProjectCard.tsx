import Link from 'next/link';
import { Button } from './ui/button';

const ProjectCard = ({
  category,
  date,
  client,
  title,
  description,
}: Project) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap'>
      <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
        <span className='font-semibold uppercase title-font text-muted-foreground'>
          {category}
        </span>
        <span className='mt-1 text-muted-foreground/60 text-sm'>{date}</span>
        <span className='mt-1 text-muted-foreground/60 text-sm'>{client}</span>
      </div>
      <div className='md:flex-grow'>
        <h2 className='text-2xl font-medium text-muted-foreground/80 mb-2'>
          {title}
        </h2>
        <p className='leading-relaxed'>{description}</p>
        <Button variant={'link'} className='px-0'>
          <Link href='/' className=' inline-flex items-center mt-4'>
            Learn More
            <svg
              className='w-4 h-4 ml-2'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M5 12h14'></path>
              <path d='M12 5l7 7-7 7'></path>
            </svg>
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default ProjectCard;
