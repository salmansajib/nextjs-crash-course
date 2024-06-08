'use client';

function Button() {
  return (
    <div className='mt-5'>
      <button
        className=' bg-green-300 text-gray-900 px-5 py-2 rounded '
        onClick={() => console.log('clicked')}
      >
        Click here
      </button>
    </div>
  );
}

export default Button;
