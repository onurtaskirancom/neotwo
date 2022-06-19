import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { singleBlog, listRelated } from "../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import renderHtml from "react-render-html";
import moment from "moment";
import SmallCard from "../components/blog/SmallCard";
import Footer from "../components/Footer";
import DisqusThread from "../components/DisqusThread";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
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

  loadRelated();

  useEffect(() => {
    loadRelated();
  }, []);

  const head = () => (
    <Head>
      <title>
        {blog.title} | {APP_NAME}
      </title>
      <meta name='description' content={blog.mdesc} />
      <link rel='canonical' href={`${DOMAIN}/${query.slug}`} />
      <link
        rel='shortcut icon'
        href='/static/images/favico.png'
        type='image/x-icon'
      />
      <link
        rel='android-chrome icon'
        href='/static/images/favico/android-chrome-192x192.png'
        type='image/x-icon'
      />
      <link
        rel='android-chrome icon'
        href='/static/images/favico/android-chrome-512x512.png'
        type='image/x-icon'
      />
      <link
        rel='apple-touch-icon'
        href='/static/images/favico/apple-touch-icon.png'
        type='image/x-icon'
      />
      <link
        rel='icon'
        href='/static/images/favico/favicon.ico'
        type='image/x-icon'
      />
      <link rel='icon' href='/static/favicon-16x16.png' type='image/x-icon' />
      <link
        rel='icon'
        href='/static/images/favico/favicon-32x32.png'
        type='image/x-icon'
      />
      <link rel='shortcut icon' href='#' />
      <meta property='og:title' content={`${blog.title} | ${APP_NAME}`} />
      <meta property='og:description' content={blog.mdesc} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${DOMAIN}/${query.slug}`} />
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
      // <Link key={i} href={`/categories/${c.slug}`}>
      <Link href='/categories/[slug]' key={i} as={`/categories/${c.slug}`}>
        <a className='btn btn-outline-light  mr-1 ml-1 mt-3'>{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      // <Link key={i} href={`/tags/${t.slug}`}>
      <Link href='/tags/[slug]' as={`/tags/${t.slug}`} key={i}>
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

  const showComments = () => {
    return (
      <div>
        <DisqusThread
          id={blog.id}
          title={blog.title}
          path={`/blog/${blog.slug}`}
        />
      </div>
    );
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className='container-fluid ' style={{ marginTop: "-95px" }}>
            <div className='p-4 mx-5 nomobile'>
              <div className='row'>
                <div className='col-md-8 nomobile'>
                  <div className='neo px-3'>
                    <article>
                      <div className='neo px-3 pt-3 pb-1 mt-3'>
                        <section>
                          <div
                            className='row mx-auto'
                            style={{ marginTop: "3px" }}
                          >
                            <h1 className='col-md-12 pt-3 pb-3 px-3 title-neo2'>
                              {blog.title}
                            </h1>
                            <div className='col-md-8'>
                              <p className='author lead  mark'>
                                ☕️
                                {showBlogTags(blog)}
                                👨{" "}
                                <Link href='/about' as={`/about`}>
                                  <a>{blog.postedBy.username}</a>
                                </Link>{" "}
                              </p>
                            </div>
                            <div className='post-image neo-img mx-auto'>
                              <img
                                src={`${API}/blog/photo/${blog.slug}`}
                                style={{ maxHeight: "auto", width: "100%" }}
                                alt={blog.title}
                                className='img img-fluid neo-img'
                              />
                            </div>
                          </div>
                        </section>
                      </div>
                      <div className='container'>
                        <section>
                          <div className='neo col-md-12 pt-4'>
                            {renderHtml(blog.body)}
                          </div>
                        </section>
                        <hr width='100%' color='#313131' size='40'></hr>
                        <p className="text-danger"><small>🏴‍☠️ Published {moment(blog.updatedAt).fromNow()}</small></p>
                        <hr width='100%' color='#313131' size='40'></hr>
                      </div>
                      <section>
                        <div className='container'>
                          <div className='pb-3'>
                            {showBlogCategories(blog)}
                            <br />
                            <br />
                          </div>
                        </div>
                      </section>
                    </article>
                  </div>
                  <div className='container pt-5 pb-5 neo mt-3'>
                    {showComments()}
                  </div>
                </div>

                <div className='col-md-4  nomobile'>
                  <div className='neo px-3 pt-3 pb-5 mt-3'>
                    <div className='col-md-8 mx-auto'>
                      <img
                        className='d-flex profile-onur mx-auto d-block mt-3'
                        src='static/images/onur-taskiran-about.jpg'
                        alt='onurtaskiran'
                      />
                    </div>
                    <br />

                    <span className='mt-5'>
                      <b>Hi I'm Onur Taşkıran</b>
                    </span>
                    <span style={{ fontSize: 35 }}>&#128075;&#127996;</span>
                    <p>
                      I love to write code, design and do sports. I have been
                      working as a Web Developer and Graphic Designer for many
                      years.
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
                            href='mailto:taskiranonur9@gmail.com'
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
                    <div className='p-3'>
                      <img
                        className='d-flex p-3 mx-auto'
                        src='static/images/logo1.png'
                        width='100%'
                        height='100%'
                        alt='onurtaskiran.com'
                      />
                    </div>
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
