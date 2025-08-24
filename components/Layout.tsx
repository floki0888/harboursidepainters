import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Harbourside Painters` : 'Harbourside Painters'}</title>
        <meta
          name="description"
          content={description || 'Premium painting, remedial and rope access services across Sydney, Newcastle and Wollongong.'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;