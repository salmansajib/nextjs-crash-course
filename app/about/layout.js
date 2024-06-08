import Link from 'next/link';

function AboutLayout({ children }) {
  return (
    <div>
      <nav className='my-5'>
        <ul className='flex gap-5'>
          <li>
            <Link href='/about/mission'>Mission</Link>
          </li>
          <li>
            <Link href='/about/vision'>Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default AboutLayout;
