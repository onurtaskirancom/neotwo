import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { create, getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { createBlog } from "../../actions/blog";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../helpers/quill";
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const CreateBlog = ({ router }) => {

  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // }




  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]); // categories
  const [checkedTag, setCheckedTag] = useState([]); // tags

  const [body, setBody] = useState(blogFromLS());
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    title: "",
    hidePublishButton: false,
    loading: false,
  });

  const {
    error,
    sizeError,
    success,
    formData,
    title,
    hidePublishButton,
    loading,
  } = values;
  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initCategories();
    initTags();
  }, [router]);

  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const publishBlog = (e) => {
    setValues({ ...values, loading: true });
    e.preventDefault();
    // console.log("ready to publishBlog");
    createBlog(formData, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          loading: false,
          title: "",
          error: "",
          success: `A new blog titled "${data.title}" is created`,
        });
        setBody("");
        setCategories([]);
        setTags([]);
      }
    });
  };

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = (e) => {
     console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const handleToggle = (c) => () => {
    setValues({ ...values, error: "" });

    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set("categories", all);
  };

  const handleTagsToggle = (t) => () => {
    setValues({ ...values, error: "" });

    // return the first index or -1
    const clickedTag = checked.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set("tags", all);
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className='list-unstyled'>
          <input
            onChange={handleToggle(c._id)}
            type='checkbox'
            className='mr-2'
          />
          <label className='form-check-label'>{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className='list-unstyled'>
          <input
            onChange={handleTagsToggle(t._id)}
            type='checkbox'
            className='mr-2'
          />
          <label className='form-check-label'>{t.name}</label>
        </li>
      ))
    );
  };

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-success'
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );

  const showLoading = () => (
    <div
      className='alert alert-info'
      style={{ display: loading ? "" : "none" }}
    >
      Loading...
    </div>
  );

  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog}>
        <div className='form-group'>
          <label className='text-muted'>Title</label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={handleChange("title")}
          />
        </div>

        <div className='form-group'>
          {/* <ReactQuill
            // modules={QuillModules}
            modules={{
              toolbar: [
                ["bold", "italic", "underline", "strike"], // toggled buttons
                ["blockquote", "code-block"],

                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }], // superscript/subscript
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                [{ direction: "rtl" }], // text direction

                [{ size: ["small", false, "large", "huge"] }], // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],

                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ font: [] }],
                [{ align: [] }],

                ["clean", "video", "image"], // remove formatting button
              ],
            }}
            formats={QuillFormats}
            value={body}
            placeholder='Write something amazing...'
            onChange={handleBody}
          /> */}
        <Editor
        //  onInit={(evt, editor) => editorRef.current = editor}
         initialValue={body}
         onEditorChange={handleBody}
         placeholder='Write something amazing...'
         init={{
          //  height: 500,
          //  menubar: false,
          //  plugins: [
          //    'advlist autolink lists link image charmap print preview anchor',
          //    'searchreplace visualblocks code fullscreen',
          //    'insertdatetime media table paste code help wordcount'
          //  ],
          //  toolbar: 'undo redo | formatselect | ' +
          //  'bold italic backcolor | alignleft aligncenter ' +
          //  'alignright alignjustify | bullist numlist outdent indent | ' +
          //  'removeformat | help',
         // selector: 'textarea',
        //plugins: ['autosave', 'lists', 'code', 'image', 'image code', 'fullscreen',  'tabfocus', 'image media link tinydrive code imagetools', 'emoticons', 'searchreplace', 'directionality', 'importcss', 'lists', 'fullpage', 'table', 'template', 'wordcount', 'visualchars', 'paste','autosave lists autolink', 'textarea', 'visualblocks', 'advlist','image imagetools', 'anchor', 'autosave', 'autolink', 'autoresize','bbcode','charmap', 'codesample', 'print', 'save', 'quickbars', 'autolink'],
        plugins: 'print preview  importcss autoresize code fullpage tinydrive searchreplace autolink autosave save directionality  visualblocks visualchars fullscreen image link media  template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists  wordcount   imagetools textpattern noneditable help    charmap   quickbars  emoticons ',
        codesample_languages: [
          { text: 'css', value: 'css' },
          { text: 'javascript', value: 'javascript' },
          { text: 'aspnet', value: 'aspnet' },
          { text: 'c', value: 'c' },
          { text: 'csharp', value: 'csharp' },
          { text: 'django', value: 'django' },
          { text: 'git', value: 'git' },
          { text: 'go', value: 'go' },
          { text: 'java', value: 'java' },
          { text: 'nginx', value: 'nginx' },
          { text: 'php', value: 'php' },
          { text: 'python', value: 'python' },
          { text: 'sass', value: 'sass' },
          { text: 'scss', value: 'scss' },
          { text: 'swift', value: 'swift' },
          { text: 'typescript', value: 'typescript' },
          { text: 'phpdoc', value: 'phpdoc' },
          { text: 'json', value: 'json' }
        ],

        toolbar: 'undo redo  | bold italic |  code |link | visualblocks | image |undo redo styleselect bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
        icon: 'bold',
        tooltip: 'Formatting',
        toolbar_sticky: true,
        items: 'bold italic underline | superscript subscript'
         }}
       />
      
          
        </div>

        <div>
        {/* <button onClick={log}>Publish</button> */}
          <button type='submit' className='btn btn-primary'>
            Publish
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className='container-fluid pb-5'>
      <div className='row'>
        <div className='col-md-8'>
          {createBlogForm()}
          <div className='pt-3'>
            {showError()}
            {showSuccess()}
            {showLoading()}
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div className='form-group pb-2'>
              <h5>Featured image</h5>
              <br />

              <small className='text-muted'>Max size: 1mb</small>
              <label className='btn btn-outline-info'>
                Upload featured image
                <input
                  onChange={handleChange("photo")}
                  type='file'
                  accept='image/*'
                  hidden
                />
              </label>
            </div>
          </div>
          <div>
            <h5>Categories</h5>
            <br />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showCategories()}
            </ul>
          </div>
          <div>
            <h5>Tags</h5>
            <br />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
