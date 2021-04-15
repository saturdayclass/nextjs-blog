import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.module.css';
function PostItem(props) {
  const { title, image, slug, summary, date } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              width={300}
              height={200}
              layout="responsive"
              alt={title}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{summary}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
