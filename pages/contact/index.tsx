import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout';

const ContactPage = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <h1 className='title'>
        {/* Ir a <a href='/about'>About</a> */}
        Ir a{' '}
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h1>
      <p className='description'>
        Get started by editing <code className='code'>pages/contact.js</code>
      </p>
    </>
  );
};

ContactPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactPage;
