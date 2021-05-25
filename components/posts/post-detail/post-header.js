import Image from 'next/image';
import classes from './post-header.module.css';

function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={150} width={200} />
    </header>
  );
}
export default PostHeader;
