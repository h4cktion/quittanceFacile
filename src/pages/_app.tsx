import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Modal from '@/components/commons/Modal';

import store from '@/store';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute z-[-10] h-[350px] w-full bg-indigo-400'></div>
      <Provider store={store}>
        <div className='z-10 flex h-16 w-full  items-center bg-white p-4 text-stone-600 shadow-md'>
          Quittance Facile
        </div>
        <Component {...pageProps} />;
        <Modal />
      </Provider>
    </div>
  );
}

export default MyApp;
