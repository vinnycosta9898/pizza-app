import { AppProps } from 'next/app';

import { AuthProvider } from '../context/AuthContext';

import { ToastContainer } from 'react-toastify'

import '../../styles/globals.scss';

import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000}/>
    </AuthProvider>
    )
}

export default MyApp
