import React from 'react';

async function Comments({ commetsPromise }) {
  const comments = await commetsPromise;

  return (
    <div className=' mt-8 '>
      <h1 className=' text-xl font-semibold '>Comments</h1>
      <ul className='mt-3'>
        {comments.map((comment) => (
          <li className=' my-2 text-gray-300 ' key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
