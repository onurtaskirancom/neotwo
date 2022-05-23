import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const SmallCard = ({ blog }) => {
  return (
    <div className='card neo'>
      <section>
       <Link href="/[slug]" as={`/${blog.slug}`}>
          <a>
            <img
              className='img img-fluid'
              style={{ height: "100%", width: "100%" }}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
          </a>
        </Link>
      </section>

      <div className='card-body'>
        <section>
        <Link href="/[slug]" as={`/${blog.slug}`}>
            <a>
              <h6 className='card-title related'>{blog.title}</h6>
            </a>
          </Link>
          <div className='card-text'>{renderHTML(blog.excerpt)}</div>
        </section>
      </div>

      <div className='card-body'>
        Posted {moment(blog.updatedAt).fromNow()} by{" "}
        <Link href="/about" as={`/about`} >
          <a>{blog.postedBy.username}</a>
        </Link>
      </div>
    </div>
  );  
};

export default SmallCard;
