import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found`,
      });
    });
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };

  const searchedBlogs = (results = []) => {
    return (
      <div className="my-5 px-1 pt-5 ">
      
      <div className='neo jumbotron neo-search  '>
        {message && <p className='pt-4 text-muted font-italic'>{message}</p>}

        {results.map((blog, i) => {
          return (
            <div key={i}>
                <Link href="/[slug]" as={`/${blog.slug}`}>
                <a className='neo-search '>{blog.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
      </div>
      
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div className='row mx-5 p-3 neo-search' style={{ marginTop: "-70px" }}>
        <div className='col-md-8 mx-auto'>
          <h1>Welcome to My Personel Blog Web Site || onurtaskiran.net</h1>
        </div>

        <div className='col-md-3 pr-1 mx-auto'>
          <input
            type='search'
            className='form-control '
            placeholder='Search blogs'
            onChange={handleChange}
            style={{ marginLeft: "5px" }}
          />
        </div>

        <div className='col-md-1'>
          <button className='btn btn-outline-secondary ' type='submit' style={{ marginLeft: "4px" }}>
            Search
          </button>
        </div>

      </div>
    </form>
  );

  return (
    <div className='container-fluid  pt-5 mt-3 neo-search '>
      <div className='pt-3 pb-5 neo-search'>{searchForm()}</div>
      {searched && (
        <div
          className='text-right mx-5 p-3 neo-search '
          style={{ marginTop: "-244px", marginBottom: "-80px" }}
        >
          {searchedBlogs(results)}
        </div>
      )}
    </div>
  );
};

export default Search;
