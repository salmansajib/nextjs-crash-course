function BlogPage({ params }) {
  const { id } = params;
  return <div className='mt-5'>The blog id is: {id}</div>;
}

export default BlogPage;
