import Comments from '@/app/components/Comments';
import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.description,
  };
}

async function PostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComment(id);

  // const [post, comments] = await Promise.all([postPromise, commentPromise]);

  const post = await postPromise;

  return (
    <div className='mt-5'>
      <h2 className=' text-2xl font-semibold text-blue-500 '>{post.title}</h2>
      <p className=' mt-3 '>{post.body}</p>
      <Suspense fallback='<h1>Loading comments ... </h1>'>
        <Comments commetsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}

export default PostPage;
