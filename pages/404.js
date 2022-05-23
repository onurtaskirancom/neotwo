import Layout from '../components/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';
import Footer from '../components/Footer';


function PageNotFound() {
  return (
    <Layout>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-11 p-4 mx-auto">
                    <div className='neo px-3 pt-3 pb-1 mt-3'>
                        <h2>404 Error</h2>
                        <hr />
                        <p>404 Page Not Found</p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
  )
}


export default PageNotFound










// import Link from "next/link";
// import Header from '../components/Header'
// import Layout from "../components/Layout";
// import ContactForm from "../components/form/ContactForm";
// import Footer from "../components/Footer";

// const NotFound = ( ) => {
//   return (

// <div className='not-found'>
//         <h1>Ooops...</h1>
//         <h2>That Page Can not be found.</h2>
//         <p>
//           Go back{" "}
//           <Link href='/'>
//             <a>HomePage</a>{" "}
//           </Link>
//         </p>
//       </div>


//   );
// };

// export default NotFound;
