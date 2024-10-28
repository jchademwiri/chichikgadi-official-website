import Link from 'next/link';
import { ReactNode } from 'react';

type ContactCard = {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
};

const ContactCard = ({ href, title, description, icon }: ContactCard) => {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noreferrer '
      className='grid place-items-center gap-5 rounded bg-secondary py-10 border hover:border-primary/30 '
    >
      {icon}
      <h3 className='font-medium grid p-4 text-muted-foreground'>
        {title}
        <span className='text-xl text-foreground'>{description}</span>
      </h3>
    </Link>
  );
};
export default ContactCard;
