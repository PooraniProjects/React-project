import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { Cpros } from '../../component/compros';


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseImg:
        [
          {
            img: '/images/html.webp',
            title: 'HTML Tamil',

          },
          {
            img: '/images/datastructure.webp',
            title: 'Front-end (React)',

          },
          {
            img: '/images/angularjs.webp',
            title: 'Front-end (Angular)',

          },
        ]
    }

  }


  render() {
    return (
      <section>
        <section className='home_page_section container_page'>
          <div className='home_page'>
            <div className='home_left_content' >
              <h1>Expand your career opportunities with</h1>
              <h2>Acquiring</h2>
              <p>Acquire Skills for your present (and future). Get started with us</p>
              <div className='btnn'>
                <Link to='/acquirepage/liveclass/classlv' className='btn btn-danger pl-3 p-2  course_btn'>
                  Join LIVE Classes
                </Link>

                <Link to='/acquirepage/coursepage/course' className='btn btn-outline-danger pl-3 p-2  course_btn'>
                  View All Course
                </Link>


              </div>
            </div>
            <div className='home_right_img'>
              <img src='\images\banner-img.png' />
            </div>
          </div>
        </section>

        <section className='acqurie_page_section'>
          <div className='acqurie_page container_page'>
            <div className='acqurie_left_img'>
              <img src='\images\why-acquiring.png' />
            </div>
            <div className='acqurie_right_content'>
              <h1>Why Acquiring ?</h1>
              <p>Acquiring technology helps you build and advance your software engineering career. Our comprehensive program covers an unconventional course syllabus that includes hackathons, debates, pair programming, workshops, and lots of first-principles thinking! This is unique accelerated learning that gets you trained and ready for a career in the most happening industry.</p>
              <div className='icons'>
                <div>
                  <i className='fas fa-arrow-right'></i><span>Work on practical & real-time use cases</span>
                </div>

                <div>
                  <i className='fas fa-arrow-right'></i><span> Learn from seasoned senior software engineers in the industry.</span>
                </div>

                <div>
                  <i className='fas fa-arrow-right'></i><span>Work with a dedicated career counsellor</span>
                </div>

                <div>
                  <i className='fas fa-arrow-right'></i><span>Placement Assistance</span>
                </div>

              </div>

            </div>
          </div>
        </section>

        <section className='acquire_offer_section container_page'>
          <div className='acq_offe_pge'>
            <h1>What Acquiring offers you?</h1>
            <div className='acq_offer_page'>
              <div className='acq_offer_left'>
                <div className='card'>
                  <i className='fas fa-video'></i>
                  <h1>Online Streaming <br />Courses</h1>
                  <p>Online courses for learning <br />and upskilling</p>
                </div>
                <div className='card'>
                  <i className='fas fa-tv'></i>
                  <h1>Live Classess</h1>
                  <p>Providing guaranteed job <br /> placement support
                    through<br /> live classes</p>
                </div>
              </div>
              <div className='acq_offer_right'>
                <img src='\images\offers-img.svg' />
              </div>
            </div>
          </div>
        </section>

        <section className='container_page'>
          <div className='course_continer'>
            <div className='head_card_title'>
              <h1>Our Online Courses</h1>
              <p>We are focused on understanding client’s business first, and dedicated to solve their business problems.</p>
            </div>

            <div className='row'>
              {this.state.courseImg.map((data) =>
                <div className='col-4'>
                  <Cpros courseImg={data} />
                </div>

              )}
            </div>
          </div>
        </section>

        <section className='container_page'>
          <div className='text-center fs-2'>
            <Link to='/acquirepage/coursepage/course' className='btn btn-danger p-3 course_btn'>
              View All Courses <i className='fa fa-arrow-up-right-from-square'></i>
            </Link>
          </div>
        </section>

        <section className="end_page_bg">

          <div className="end_page  container_page ">
            <div>
              <h2 className='text-white'>Still have questions?</h2>
            </div>
            <div>
              <Link to='/acquirepage/contactpage/contact' className="btn btn-outline-danger end_page_btn" type="submit">
                Contact Us
              </Link>
            </div>
          </div>

        </section>
      </section >



    );
  }
}
