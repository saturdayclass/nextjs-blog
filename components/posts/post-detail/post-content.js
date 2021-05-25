import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';

function PostContent() {
  const DUMMY_POST = {
    title: 'Secondary posts',
    date: '2020-05-20',
    slug: 'secondary-posts',
    image: 'admin.png',
    content: '# Secondary post',
  };
  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
