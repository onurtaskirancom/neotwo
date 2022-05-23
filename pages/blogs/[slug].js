import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { singleBlog, listRelated } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHtml from "react-render-html";
import moment from "moment";
import SmallCard from "../../components/blog/SmallCard";
import Footer from "../../components/Footer";
import DisqusThread from "../../components/DisqusThread";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ScrollUpButton from "react-scroll-up-button";


const SingleBlog = ({ blog, query }) => {
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  
  

  const head = () => (
    <Head>
      <title>
        {blog.title} | {APP_NAME}
      </title>
      <meta name='description' content={blog.mdesc} />
      <link rel='canonical' href={`${DOMAIN}/blogs/${query.slug}`} />
      <link rel="shortcut icon" href="/static/images/favico.png" type="image/x-icon" />
      <link rel="android-chrome icon" href="/static/images/favico/android-chrome-192x192.png" type="image/x-icon"/>
      <link rel="android-chrome icon" href="/static/images/favico/android-chrome-512x512.png" type="image/x-icon"/>
      <link rel="apple-touch-icon" href="/static/images/favico/apple-touch-icon.png" type="image/x-icon"/>
      <link rel="icon" href="/static/images/favico/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="/static/favicon-16x16.png" type="image/x-icon" />
      <link rel="icon" href="/static/images/favico/favicon-32x32.png" type="image/x-icon"/>
      <meta property='og:title' content={`${blog.title} | ${APP_NAME}`} />
      <meta property='og:description' content={blog.mdesc} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property='og:site_name' content={`${APP_NAME}`} />

      <meta property='og:image' content={`${API}/blog/photo/${blog.slug}`} />
      <meta
        property='og:image:secure_url'
        content={`${API}/blog/photo/${blog.slug}`}
      />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='fb:app_id' content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className='btn btn-outline-light  mr-1 ml-1 mt-3'>{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className='text-secondary mr-1 ml-1 mt-3'>{t.name}</a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className='col-md-4' key={i}>
        <article>
          <SmallCard blog={blog} />
        </article>
      </div>
    ));
  };

  // const showComments = () => {
  //   return (
  //     <div>
  //       <DisqusThread
  //         id={blog.id}
  //         title={blog.title}
  //         path={`/blog/${blog.slug}`}
  //       />
  //     </div>
  //   );
  // };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className='container-fluid' style={{ marginTop: "-95px" }}>
            <div className='p-4 mx-5 '>
              <div className='row'>
                <div className='col-md-8 neo'>
                    <p> Closed</p>
                  <div className='container pt-5 pb-5 neo mt-3'>
                    {/* {showComments()} */}
                  </div>
                </div>

                <div className='col-md-4  '>
                <div className='neo px-3 pt-3 pb-5 mt-3'>
                  <img
                      className='profile-onur mx-auto d-block mt-3'
                      src='../static/images/onur-taskiran-about.jpg'
                      alt='onurtaskiran'
                    />
                    <br />
                    <span className="mt-5"><b>Hi I'm Onur Taşkıran</b></span>
                   
                    <p>
                      I love Web Programming, Graphic Design
                      and Sport. I'm working as a writer and Web Developer with
                      experience of 5 years until now.
                    </p>

                  </div>
                  <div className='neo px-3 pt-3 pb-1 mt-3'>
                    <div className='container-fluid'>
                      <h3>SOCIAL MEDIA</h3>
                      <div className='row social-media'>
                        <div className='mx-2'>
                          <a
                            href='https://github.com/onurtaskirancom'
                            target='_blank'
                          >
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                          </a>
                        </div>
                        <div className='mx-2'>
                          <a
                            href='https://twitter.com/onurtaskirancom'
                            target='_blank'
                          >
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                          </a>
                        </div>
                        <div className='mx-2'>
                          <a
                            href='https://www.linkedin.com/in/taskiranonur/'
                            target='_blank'
                          >
                            <FontAwesomeIcon
                              icon={faLinkedin}
                            ></FontAwesomeIcon>
                          </a>
                        </div>
                        <div className='mx-2'>
                          <a
                            href='https://instagram.com/tonurco'
                            target='_blank'
                          >
                            <FontAwesomeIcon
                              icon={faInstagram}
                            ></FontAwesomeIcon>
                          </a>
                        </div>
                        <div className='mx-2'>
                          <a
                            href='mailto:info@onurtaskiran.net'
                            target='_blank'
                          >
                            <FontAwesomeIcon
                              icon={faEnvelope}
                            ></FontAwesomeIcon>
                          </a>
                        </div>
                      </div>
                    </div>

                    <p></p>
                  </div>
                  <div className='neo px-3 pt-3 pb-1 mt-3'>
                    <h3>PERSONAL BLOG WEB SITE</h3>
                    <p>
                      The blog site where the author scribbles according to his
                      mood.
                    </p>
                    <img
                      className='d-flex p-3 mx-auto'
                      src='../static/images/logo1.png'
                      width='300'
                      height='300'
                      alt='onurtaskiran.com'
                    />
                  </div>
                  <div className='neo px-3 pt-3 pb-1 mt-3'>
                  <h3>BUY ME A COFFEE</h3>
                    <div className='col-md-8 mx-auto pb-3'>
                      <a
                        href='https://www.buymeacoffee.com/onurtaskiran'
                        target='_blank'
                      >
                        <img
                          width='100%'
                          height='100%'
                          src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                          alt='Buy Me a coffee'
                        />
                        <br />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-12  '>
            <div className='col-md-12 pb-5 mt-3 neo'>
              <h4 className='text-center pt-5 pb-5 h2'>Related blogs</h4>
              <br />
              <div className='row'>{showRelatedBlog()}</div>
            </div>
          </div>
          <ScrollUpButton />
          <Footer />
        </main>
      </Layout>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data)
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
