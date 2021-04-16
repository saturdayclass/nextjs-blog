import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'First posts',
    date: '2020-05-20',
    summary: 'This is summary',
    slug: 'first-posts',
    image: 'admin.png',
  },
  {
    title: 'Secondary posts',
    date: '2020-05-20',
    summary: 'This is summary secondary',
    slug: 'secondary-posts',
    image: 'admin.png',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
