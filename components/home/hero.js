import Image from 'next/image';
import classes from './hero.module.css';
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/kepo.jpg"
          alt="This image profile"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Raihan!</h1>
      <p>I created this blog with nextjs framework</p>
    </section>
  );
}
export default Hero;
