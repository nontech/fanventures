import Image from 'next/image'

const SneakPeek = () => {
  return (
    <Image 
      src="/sneak_peek.svg" 
      alt="An SVG of an eye" 
      width={500}
      height={500}
    />
  );
};

export default SneakPeek;