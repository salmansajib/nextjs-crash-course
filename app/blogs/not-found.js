import Link from 'next/link';

function NotFound() {
  return (
    <div className=' min-h-svh flex gap-4 flex-col items-center justify-center '>
      <h1 className=' text-5xl font-bold text-red-600 '>404</h1>
      <h2 className=' text-xl '>The requested blog could not be found.</h2>
      <Link className=' bg-blue-700 px-5 py-3 rounded ' href='/'>
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
