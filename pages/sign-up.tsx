import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SignUpForm from '../components/organisms/SignUpForm';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Store GG - Sign Up</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="Store GG - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:image"
          content="/icon/logo.png"
        />
        <meta
          property="og:url"
          content="http://localhost:3000/"
        />
      </Head>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <Link href="/">
                <a className="navbar-brand">
                  <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
                </a>
              </Link>
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
}
