import Image from 'next/image';
const LogoComponent = ({ src, alt }: LogoIcon) => {
  return (
    <Image
      className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
      src={src}
      alt={alt}
      width={158}
      height={48}
    />
  );
};
export default LogoComponent;
