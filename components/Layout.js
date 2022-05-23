import React, { useEffect, Component, Fragment } from 'react'
import Header from './Header'
import Prism from "prismjs";
// import "prismjs/themes/prism-atom-dark.css"
// import "prismjs/themes/prism-nord.css"
// import "prismjs/themes/prism-vsc-dark-plus.css"
import { Editor } from "@tinymce/tinymce-react";
// import "../static/css/prism-nord.css"

const Layout = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};


export default Layout;