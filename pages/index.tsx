import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h1 className='title'>
        {/* Ir a <a href='/about'>About</a> */}
        Ir a{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>
      </h1>
      <p className='description'>
        Get started by editing <code className='code'>pages/index.js</code>
      </p>
    </>
  );
};

HomePage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
