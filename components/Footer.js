import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='container-fluid pt-5'>
      <div className='neo px-2'>
        <div className='row'>
          <div className="col-md-4 pt-5">
            <p className='text-center pt-5 pb-5'>
              © Copyright 2022 -  All Right Reserved.
            </p>
          </div>
          <div className="col-md-4 pt-5">
            <a className='nav-link' href='/'>
              <img
                className='rounded mx-auto d-block'
                src='https://onurtaskiran.net/static/images/logo.png'
                alt='onurtaskiran'
              />
            </a>
          </div>
          <div className="col-md-4 pt-5 ">
            <div className='container-fluid pt-5 text-center'>
              <div className='row social-media-footer'>
                <div className='mx-1'>
                  <a href='https://github.com/onurtaskirancom' target='_blank'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                </div>
                <div className='mx-1'>
                  <a href='https://twitter.com/onurtaskirancom' target='_blank'>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                </div>
                <div className='mx-1'>
                  <a href='https://linkedin.com/in/taskiranonur/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                </div>
                <div className='mx-1'>
                  <a href='https://instagram.com/tonurco' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </div>
                <div className='mx-1'>
                  <a href='mailto:taskiranonur9@gmail.com' target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
