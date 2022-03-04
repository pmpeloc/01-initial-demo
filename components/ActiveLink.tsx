import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  href: string;
  text: string;
}

const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
