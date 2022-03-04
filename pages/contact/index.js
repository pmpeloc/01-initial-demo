import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout';

const Contact = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Contact;
