import { Button } from './ui/button';
import { Card } from './ui/card';

const ServicesCard = ({ title, description, icon }: any) => {
  return (
    <Card className='p-4 hover:border-primary/50 cursor-pointer'>
      <div className=''>
        <div className='flex items-center mb-3'>
          <Button
            size={'icon'}
            variant={'ghost'}
            className='text-muted-foreground mr-3 w-8 h-8'
          >
            {icon}
          </Button>
          <h2 className='text-lg text-muted-foreground font-medium'>{title}</h2>
        </div>
        <div className='flex-grow'>
          <p className='leading-relaxed text-foreground/80 text-base'>
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
export default ServicesCard;
