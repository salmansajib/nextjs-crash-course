import Button from '@/app/components/Button';
import Image from 'next/image';
import flower from '@/public/images/flower.jpg';

function Mission() {
  return (
    <main>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
        architecto aliquam obcaecati, dignissimos illo voluptatibus corrupti
        adipisci dolor placeat! Suscipit maxime iusto architecto reiciendis iure
        voluptates mollitia repudiandae eum ipsum, eligendi maiores nesciunt
        accusamus animi pariatur, dolore saepe doloremque exercitationem!
      </div>

      <div className=' w-[600px] '>
        <Image
          className='mt-5'
          src={flower}
          alt='flower bouquet image'
          quality={100}
          placeholder='blur'
        />
      </div>

      <Button />
    </main>
  );
}

export default Mission;
