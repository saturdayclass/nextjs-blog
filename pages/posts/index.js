import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from './../../helpers/posts-util';

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="A list of all programming related article or tutorials "
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
