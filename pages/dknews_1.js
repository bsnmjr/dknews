import { SearchIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { API_URL } from '../config';

import Image from 'next/image';

const _dknews = () => {
  const router = useRouter();

  return (
    <>
      <head>
        <title>DKSH-연말신문</title>
      </head>

      <Navbar />
      <div className='main'>
            <div>
{/*               <img src='/img/dknews/dknews1.jpg' width="100%"></img>
              <img src='/img/dknews/dknews2.jpg' width="100%"></img>
              <img src='/img/dknews/dknews3.jpg' width="100%"></img>
              <img src='/img/dknews/dknews4.jpg' width="100%"></img>
              <img src='/img/dknews/dknews5.jpg' width="100%"></img>
              <img src='/img/dknews/dknews6.jpg' width="100%"></img>
              <img src='/img/dknews/dknews7.jpg' width="100%"></img>
              <img src='/img/dknews/dknews8.jpg' width="100%"></img>
 */} 
              <Image src={`${API_URL}/dknews_jpg/dknews1.jpg`} height={2481} width={1754}></img>
              <img src={`${API_URL}/dknews_jpg/dknews2.jpg`} width="80%"></img>
              <img src={`${API_URL}/dknews_jpg/dknews3.jpg`} width="80%"></img>
              <img src={`${API_URL}/dknews_jpg/dknews4.jpg`} width="80%"></img>
              <img src={`${API_URL}/dknews_jpg/dknews5.jpg`} width="80%"></img>
              <img src={`${API_URL}/dknews_jpg/dknews6.jpg`} width="80%"></img>
              <img src={`${API_URL}/dknews_jpg/dknews7.jpg`} width="80%"></img>
              <img src={`${API_URL}/dknews_jpg/dknews8.jpg`} width="80%"></img>

            </div>
      </div>
      <Footer />
    </>
  );
};

export default _dknews;
