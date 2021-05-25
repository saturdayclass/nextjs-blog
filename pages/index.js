import Hero from './../components/home/hero';
import FeaturedPosts from './../components/home/featured-posts';
import { getFeaturedPosts } from './../helpers/posts-util';

function HomePage(props) {
  const { posts } = props;
  return (
    <>
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
