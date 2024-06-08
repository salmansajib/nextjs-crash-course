import { Poppins } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'NextJs Crash',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className=' p-6 '>
      <body className={poppins.className}>
        <nav>
          <ul className='flex gap-5 mb-5'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/blogs'>Blogs</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
