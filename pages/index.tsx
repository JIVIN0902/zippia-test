import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Test</title>
        <meta name="description" content="Zippia Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-72 flex items-center justify-center">
        <Link href="/test/jobs" passHref>
          <button className=" bg-cyan-500  p-2 rounded-sm text-white">
            Go to the Jobs Page
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
