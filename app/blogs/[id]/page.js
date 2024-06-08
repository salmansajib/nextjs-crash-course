import { notFound } from 'next/navigation';

function BlogPage({ params }) {
  const { id } = params;

  if (id === '3') {
    notFound();
  }

  return <div className='mt-5'>The blog id is: {id}</div>;
}

export default BlogPage;
