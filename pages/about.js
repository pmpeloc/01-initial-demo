import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <h1>About Page</h1>
      <h1 className='title'>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        {/* Ir a <a href='/'>Home</a> */}
        Ir a{' '}
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h1>
      <p className='description'>
        Get started by editing <code className='code'>pages/about.js</code>
      </p>
    </MainLayout>
  );
};

export default About;
