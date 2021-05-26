import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';

function PostContent(props) {
  const { post } = props;
  return (
    <article className={classes.content}>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
