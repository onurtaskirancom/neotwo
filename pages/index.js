import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../actions/blog";
import Card from "../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import LayoutRight from "../components/LayoutRight";
import Search from "../components/blog/Search";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ScrollUpButton from "react-scroll-up-button";

const Blogs = ({
  blogs,
  categories,
  tags,
  totalBlogs,
  blogsLimit,
  blogSkip,
  router,
}) => {
  const head = () => (
    <Head>
      <title>{APP_NAME}</title>
      <meta
        name='description'
        content='Personal Web Site - Programming blogs and tutorial on react node next asp.net c# php and web development'
      />
      <link rel='canonical' href={`${DOMAIN}${router.pathname}`} />
      <link rel="shortcut icon" href="/static/images/favico.png" type="image/x-icon" />
      <link rel="android-chrome icon" href="/static/images/favico/android-chrome-192x192.png" type="image/x-icon"/>
      <link rel="android-chrome icon" href="/static/images/favico/android-chrome-512x512.png" type="image/x-icon"/>
      <link rel="apple-touch-icon" href="/static/images/favico/apple-touch-icon.png" type="image/x-icon"/>
      <link rel="icon" href="/static/images/favico/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="/static/favicon-16x16.png" type="image/x-icon" />
      <link rel="icon" href="/static/images/favico/favicon-32x32.png" type="image/x-icon"/>
      <link rel="shortcut icon" href="#" />
      
      <meta
        property='og:title'
        content={`Latest web development tutorials | ${APP_NAME}`}
      />
      <meta
        property='og:description'
        content='Personal Web Site - Programming blogs and tutorial on react node next asp.net c# php and web development'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${DOMAIN}${router.pathname}`} />
      <meta property='og:site_name' content={`${APP_NAME}`} />

      <meta
        property='og:image'
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property='og:image:secure_url'
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='fb:app_id' content={`${FB_APP_ID}`} />
    </Head>
  );

  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className='btn btn-outline-light btn-lg'>
          Load more
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => {
      // ()
      return (
        <article key={i}>
          <Card blog={blog} />
          <br />
        </article>
      );
    });
  };

  const showAllCategories = () => {
    return categories.map((c, i) => (
      // <Link href={`/categories/${c.slug}`} key={i}>
      <Link href="/categories/[slug]" key={i} as={`/categories/${c.slug}`}>
        <a className='button list-group-item neo bg-neo btn btn-secondary  mt-2  '>
          {c.name}
        </a>
      </Link>
    ));
  };

  const showAllTags = () => {
    return tags.map((t, i) => (
      // <Link href={`/tags/${t.slug}`} key={i}>
      <Link href="/tags/[slug]" as={`/tags/${t.slug}`}  key={i}>
       
        <a className='btn btn-outline-secondary  mr-1 ml-1 mt-3'>{t.name}</a>
      </Link>
    ));
  };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <article key={i}>
        <Card blog={blog} />
      </article>
    ));
  };

  return (
    <React.Fragment>
      {head()}

      <Layout>
        <main>
          <div className='container-fluid '>
            <header>
              <section>
                <div className='text-center '>
                  {/* {showAllCategories()} */}
                  {/* {showAllTags()} */}
                </div>
              </section>
            </header>
          </div>
          <div className='container-fluid nomobile' style={{ marginTop: "-95px" }}>
            <div className='p-4 mx-5 nomobile'>
              <div className='row'>
                <div className='col-md-8 '>
                  <div className='neo px-3 pt-3 pb-1 mt-3'>
                    {showAllBlogs()}
                    {showLoadedBlogs()}
                    <div className='text-center pt-5 pb-5'>
                      {loadMoreButton()}
                    </div>
                  </div>
                </div>

                {/* <LayoutRight /> */}
                <div className='col-md-4  '>
                  <div className='neo px-3 pt-3 pb-5 mt-3'>
                    <div className="col-md-8 mx-auto">
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
                    <span style={{fontSize: 35}}>&#128075;&#127996;</span>
                    <p>
                      I love Web Programming, Graphic Design
                      and Sport. I'm working as a writer and Web Developer with
                      experience of  for many years.
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
                    <div className="p-3">
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

                  <div className='neo px-3 pt-3 pb-1 mt-3'>
                    <h3>CATEGORIES</h3>
                    {showAllCategories()}
                  </div>

                  <div className='neo px-3 pt-3 pb-3 mt-3'>
                    <h3>TAGS</h3>
                    {showAllTags()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ScrollUpButton />
          <Footer />
        </main>
      </Layout>
    </React.Fragment>
  );
};

Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 5;
  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip,
      };
    }
  });
};

export default withRouter(Blogs); //getInitialProps
