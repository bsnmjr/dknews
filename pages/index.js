import { SearchIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const submitQuery = () => {
    router.push(`search?q=${query}`);
  }

  return (
    <>
      <Head>
        <title>DKSH신문부 : 단대소고의 기사를 더 쉽게</title>
        <meta property='og:title' content='단대라이브러리 : 책을 더 쉽게' />
        <meta property='og:description' content='Click This.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ddlib.vercel.app/' />
        <meta property='og:image' content='/img/woongdo.png' />
      </Head>
      <Navbar />
      <div className='main'>
        <div className='max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='text-base px-3 py-2'>
            <h4 className='text _1'>
              단대소고 신문부를 인터넷에서!
            </h4>
            <h1 className='font-black text-white text-5xl'>
              DKSH 신문부
            </h1>
            <h4 className='text _2'>
              손쉽게 기사를 검색해보세요. 찾고 싶은 기사의 제목이나 키워드를 적어보세요.
            </h4>
          </div>
          <div className='px-3 mb-24 flex flex-col items-center'>
            <div className='w-full mx-auto flex items-center'>
              <input
                name='q'
                type='text'
                placeholder='검색어 입력 후 엔터를 치세요'
                className='shadow-lg mx-auto w-full aggroM-font border border-gray-200 py-4 px-5 pl-5 pr-10 rounded-lg focus:outline-none'
                autoComplete='off'
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter')
                    submitQuery();
                }}
              />
              <button className='text-gray-500 relative right-10 -mr-5' onClick={() => { submitQuery() }}>
                <SearchIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
          </div>

          {/* <h4 className='text _3'>
            아래의 기사제목을 클릭하여 기사를 읽을 수 있습니다.
          </h4> */}

          <div className='px-2 mt-36'>
            <div className='py-6'>
              
              <p className='mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight'>
                <h2>
                  <a href = '/dknews_1'>
                    단대소고 2022 연말신문.
                  </a>
                </h2>
              </p>
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
