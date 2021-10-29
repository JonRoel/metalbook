import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './Footer';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header />
     <Component {...pageProps} />
    <Footer />
  </>
  )
}

export default MyApp
