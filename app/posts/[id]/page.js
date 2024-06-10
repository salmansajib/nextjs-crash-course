import getPost from '@/lib/getPost';

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
  const post = await getPost(id);

  return (
    <div className='mt-5'>
      <h2 className=' text-2xl font-semibold text-blue-500 '>{post.title}</h2>
      <p className=' mt-3 '>{post.body}</p>
    </div>
  );
}

export default PostPage;
