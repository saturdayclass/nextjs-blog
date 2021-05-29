import Head from 'next/head';
import PostContent from './../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../helpers/posts-util';
function PostDetailPage(props) {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: 'blocking',
  };
}

export default PostDetailPage;
