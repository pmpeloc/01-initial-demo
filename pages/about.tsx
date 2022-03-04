import Link from 'next/link';
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';

const AboutPage = () => {
  return (
    <>
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
    </>
  );
};

AboutPage.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
