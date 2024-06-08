import Link from 'next/link';

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Blog 1 description',
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Blog 2 description',
    },
  ];

  return (
    <main className='mt-10'>
      <div className='mb-5'>Blogs Page</div>
      <ul>
        {blogs.map((blog) => (
          <li className='mb-2' key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Blogs;
