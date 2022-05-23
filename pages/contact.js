import Layout from '../components/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <Layout>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-11 p-4 mx-auto">
                    <div className='neo px-3 pt-3 pb-1 mt-3'>
                        <h2>Contact form</h2>
                        <hr />
                        <p>Mail : taskiranonur9@gmail.com</p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
};

export default Contact;