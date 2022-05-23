import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";


const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      // <Link key={i} href={`/categories/${c.slug}`}>
        <Link key={i}  href="/categories/[slug]" as={`/categories/${c.slug}`}>
        <a className='btn btn-outline-secondary mr-1 ml-1 mt-3'>{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      // <Link key={i} href={`/tags/${t.slug}`}>
      <Link key={i} href="/tags/[slug]" as={`/tags/${t.slug}`}>
        <a className='text-secondary mr-1 ml-1 mt-3'>{t.name}</a>
      </Link>
    ));

  return (

    <div className='lead pb-4 col-md-12'>
      <header>
        <div className="mx-2">
        <Link href="/[slug]" as={`/${blog.slug}`}>
          <a>
            <h2 className='pt-3 pb-3 title-neo mx-auto'>{blog.title}</h2>
          </a>
        </Link>
        </div>
      </header>
      <section>
      <div className="mx-2">
        <p className='author mx-auto'>
        ☕️
        {showBlogTags(blog)}
        👨{" "}
          <Link href="/about" as={`/about`} >
            <a className="text-warning">{blog.postedBy.username}</a>
          </Link>{" "}
          | 👋 Published {moment(blog.updatedAt).fromNow()}
        </p>
        </div>
      </section>
      {/* <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
        <br />
        <br />
      </section> */}

      <div className='row'>
        <div className=' post-image neo-img mx-auto'>
          <section>
          <Link href="/[slug]" as={`/${blog.slug}`}>
          <a>
            <img
              className='img img-fluid neo-img'
              style={{ maxHeight: "auto", width: "100%" }}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
             </a>
        </Link>
          </section>
        </div>
        <div className='neo col-md-12 pt-3  mx-2'>
          <section>
            <div className='pb-3'>{renderHTML(blog.excerpt)}</div>
            <Link href="/[slug]" as={`/${blog.slug}`}>
              <a className='btn btn-secondary pt-2'>Read more</a>
              
            </Link>
            <hr width="100%" color="#313131" size="40"></hr>
          </section>
          
        </div>
       
    
      </div>
    </div>


  );
};

export default Card;
