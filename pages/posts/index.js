import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from './../../helpers/posts-util';

function AllPostsPage(props) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
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
