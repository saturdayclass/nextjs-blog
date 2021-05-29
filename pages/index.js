import Head from 'next/head';
import Hero from './../components/home/hero';
import FeaturedPosts from './../components/home/featured-posts';
import { getFeaturedPosts } from './../helpers/posts-util';

function HomePage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Kepo Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
