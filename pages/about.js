import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "../components/form/ContactForm";
import Footer from "../components/Footer";
import ScrollUpButton from "react-scroll-up-button";

const About = () => {
  return (
    <Layout>
      <div className='container-fluid ' style={{ marginTop: "-95px" }}>
        <div className='row '>
          <div className='col-md-11 p-4 mx-auto '>
            <div className='neo px-3 pt-3 pb-1 mt-3 '>
              <h2>About</h2>
              <div className='post-desc wow fadeInLeftBig animated'>
                <img
                  className='neo-about col-md-3'
                  src='static/images/onur-taskiran-profile.jpg'
                  width=''
                  height=''
                  alt='onurtaskiran'
                />
                <p>
                  Hi my friend, I'm Onur Taşkıran. I live in Istanbul. I have
                  been dealing with software and graphic design for many years,
                  love to listen to Metallica while writing the code. I am
                  learning new technologies now and I will continue to learn. I
                  care about reason and science. People should also care so i
                  think it is... Also I am a professional athlete. I have three
                  licenses in kickboxing, boxing and Muay Thai. Sports and
                  software are an indispensable part of my life definition...
                </p>
                <p>
                  Follow me maybe one day i can buy you coffee but I'll probably
                  be busy so I'm not buying. come on take care. Despite
                  everything, this boy loves you all.
                </p>


                <p className='text-secondary'>
                  <strong className='text-info'>My favorite songs: </strong>{" "}
                  Metallica - One, Metallica - My Friend Of Misery, Metallica -
                  Blackened, Metallica - Turn The Page, Limp Bizkit - Take A
                  Look Around, Limp Bizkit - Break Stuff, Alabama 3 - Sad
                  Eyed Lady Of The Lowlife, The Handsome Family -  Far From Any Road
                </p>
                <p className='text-secondary'>
                  <strong className='text-danger'>My favorite movies: </strong>{" "}
                  The Godfather, Papillon (1973), Pulp Fiction, The Hateful
                  Eight, Sherlock Holmes (2009), The Lord of the Rings: The Two
                  Towers, The Game (1997), No Country For Old Men, Lost Highway,
                  Warrior, Undisputed 3, The Matrix, The Usual Suspects, 1408
                  (2007){" "}
                </p>
                <p className='text-secondary'>
                  <strong className='text-warning'>
                    My favorite Tv Series:
                  </strong>{" "}
                  Vikings, Van Helsing, Mr. Robot, Sherlock, Spartacus, Peaky
                  Blinders, Banshee, Narcos, Prison Break, House of Cards, La
                  Case De Papel, The Mentalist
                </p>
                <blockquote>
                  <p>
                    <strong> My favorite quotations:</strong>
                  </p>
                  <p>
                    {" "}
                    "It is the power of the mind to be unconquerable..." -
                    Seneca
                  </p>
                  <p>
                    "I will either find a way, or make one." - Hannibal Barca{" "}
                  </p>
                  <p>
                    "Give me six hours to chop down a tree and I will spend the
                    first four sharpening the axe." - Abraham Lincoln{" "}
                  </p>
                  <p>
                    "All men can see these tactics whereby I conquer, but what
                    none can see is the strategy out of which victory is
                    evolved." - Sun Tzu
                  </p>
                </blockquote>
              </div>
              <hr />
            </div>
            <div className='col-md-12 neo mt-2 pt-3'>
              <div className='row'>
                <div className='col-md-6 neo'>
                  <h6>SOFTWARE SKILLS</h6>
                  <p>
                    <img
                      className=''
                      src='static/images/react.png'
                      alt='onurtaskiran'
                    />
                    React
                    <br />
                    <img
                      className=''
                      src='static/images/nodejs.png'
                      alt='onurtaskiran'
                    />
                    NodeJS
                    <br />
                    <img
                      className=''
                      src='static/images/angular.png'
                      alt='onurtaskiran'
                    />
                    Angular
                    <br />
                    <img
                      className=''
                      src='static/images/javascript.png'
                      alt='onurtaskiran'
                    />
                    JavaScript
                    <br />
                    <img
                      className=''
                      src='static/images/aspnet.png'
                      alt='onurtaskiran'
                    />
                    Asp.Net Core
                    <br />
                    <img
                      className=''
                      src='static/images/mongodb.png'
                      alt='onurtaskiran'
                    />
                    MongoDB
                    <br />
                    <img
                      className=''
                      src='static/images/msserver.png'
                      alt='onurtaskiran'
                    />
                    Microsoft SQL Server
                    <br />
                    <img
                      className=''
                      src='static/images/html5.png'
                      alt='onurtaskiran'
                    />
                    HTML5
                    <br />
                    <img
                      className=''
                      src='static/images/css.png'
                      alt='onurtaskiran'
                    />
                    CSS
                  </p>
                </div>
                <div className='col-md-6 neo'>
                  <h6>GRAPHIC SKILLS </h6>
                  <p>
                    <img
                      className=''
                      src='static/images/photoshop.png'
                      alt='onurtaskiran'
                    />
                    Adobe Photoshop
                    <br />
                    <img
                      className=''
                      src='static/images/illustrator.png'
                      alt='onurtaskiran'
                    />
                    Adobe Illustrator
                    <br />
                    <img
                      className=''
                      src='static/images/indesign.png'
                      alt='onurtaskiran'
                    />
                    Adobe InDesign
                    <br />
                    <img
                      className=''
                      src='static/images/premiere.png'
                      alt='onurtaskiran'
                    />
                    Adobe Premiere
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollUpButton />
      <Footer />
    </Layout>
  );
};

export default About;
