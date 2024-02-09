import React from 'react';
import './classlv.css';
import { Link } from 'react-router-dom';


export class Livecls extends React.Component {
  render() {
    return (
      <div>
        <section className='container_page'>
          <div className='live_clss'>
            <div className='left_live_content'>
              <h1>Programmes for career advancement in <br />technology</h1>
              <ul>
                <li>100% Job Assistance Support.</li>
                <li>Mentors from Top Global Product companies.</li>
                <li>A Portfolio of Real-world Projects.</li>
                <li>Globally Recognized Certification.</li>
              </ul>
              <p>Live Classes available in English, தமிழ், ಕನ್ನಡ</p>
            </div>
            <div className='right_live_content'>
              <img src='/images/liveClasses_banner_bg.svg' />
            </div>
          </div>
        </section>


        <section className='container_page'>
          <div className='live_desc'>
            <div className='live_left_desc'>
              <img src='/images/liveClass-description.svg' />
            </div>
            <div className='live_right_desc'>
              <h1>Description</h1>
              <p>Our Live Class is packed with Capstone Project Based on Full Stack Development Program that offers 100% Job Assistance Support on completing the course. In addition to mentoring from industry experts from top MNC companies, the program has been designed by Founders (former Disney developers). While it will assist you in getting hired by top MNC's. Enhance your career in technology.</p>
            </div>
          </div>
        </section>


        <section className='container_page'>
          <div className='live_placement'>
            <div className='text-center mt-3  mb-5'>
              <h5>We offer live classes with placement support as part of our program list</h5>
            </div>

            <div className='flex_conta'>
              <div className='row conainer '>
                <div className='col-md-3 mb-3'>
                  <div className='card h-100 w-100'>
                    <img src='/images/instagram-post---1-300.webp' />
                    <div className='card-body'>
                      <h4 className='card-title  '>
                        MERN Fullstack
                      </h4>
                      <p className='card-text'>
                        We built the bestselling React course on Acquiring - this course now allows you to take your React knowledge to the next level and build fullstack web.
                      </p>
                      <Link to='/' className='btn btn-danger w-100' >
                        know more
                      </Link>

                    </div>
                  </div>
                </div>

                <div className='col-md-3 mb-3'>
                  <div className='card h-100 w-100'>
                    <img src='/images/instagram-post---1-300.webp' />
                    <div className='card-body'>
                      <h4 className='card-title  '>
                      MEAN Fullstack
                      </h4>
                      <p className='card-text'>
                      I created the bestselling Angular course - this course now allows you to take your Angular knowledge to the next level! Learn how to create modern, scalable.
                      </p>
                      <Link to='/' className='btn btn-danger w-100' >
                        know more
                      </Link>

                    </div>
                  </div>
                </div>

                <div className='col-md-3 mb-3'>
                  <div className='card h-100 w-100'>
                    <img src='/images/instagram-post---1-300.webp' />
                    <div className='card-body'>
                      <h4 className='card-title  '>
                      React Js (incl. React Router & Redux)
                      </h4>
                      <p className='card-text'>
                      React.js is THE most popular JavaScript library you can use and learn these days to build modern, reactive user interfaces for the web.



                      </p>
                      <Link to='/' className='btn btn-danger w-100' >
                        know more
                      </Link>

                    </div>
                  </div>
                </div>

                <div className='col-md-3 mb-3'>
                  <div className='card h-100 w-100'>
                    <img src='/images/instagram-post---1-300.webp' />
                    <div className='card-body'>
                      <h4 className='card-title  '>
                      Angular

                      </h4>
                      <p className='card-text'>
                      Join the most comprehensive and bestselling Angular course on Acquiring and learn all about this amazing framework from the ground up, in great depth!  course starts from scratch.
                      </p>
                      <Link to='/' className='btn btn-danger w-100' >
                        know more
                      </Link>

                    </div>
                  </div>
                </div>

                <div className='col-md-3 mb-3'>
                  <div className='card h-100 w-100'>
                    <img src='/images/instagram-post---1-300.webp' />
                    <div className='card-body'>
                      <h4 className='card-title  '>
                      React Native


                      </h4>
                      <p className='card-text'>
                      This course was updated (completely re-recorded) in April 2022 - you learn the latest version of React Native with this course!
                      </p>
                      <Link to='/' className='btn btn-danger w-100' >
                        know more
                      </Link>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section >


      </div >
    );
  }
}

