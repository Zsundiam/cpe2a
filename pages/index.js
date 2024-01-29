import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>As a student in computer engineering, I've consistently marveled at the wonders of techonology. My interest include engaging in online gaming, playing badminton, and watching movies. I chose to pursue computer engineering with the goal of delving deeper into the realm of techonolgy and expanding my knowledge. In the next five years, I envision myself employed in a company, diligently acquiring new skills to remain dedicated to my passion. My expectations in this subject is to gain more knowledge about this subject, to gain experience for using next.js, and to learn on how to create websites using next.js.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}