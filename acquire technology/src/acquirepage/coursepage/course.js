import React from 'react';
import './course.css';
import { Cpros } from '../../component/compros';


export class Course extends React.Component {
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
      <section className='container_page'>
        <div className='course_continer'>
        <div className='head_card_title'>
          <h1>Our Online Courses</h1>
          <p>We are focused on understanding client’s business first, and dedicated to solve their business problems.</p>
        </div>

        <div className='row'>
          {this.state.courseImg.map((data) =>
            <div className=' col-4'>
              <Cpros courseImg={data} />
            </div>

          )}
          </div>
        </div>
      </section>
    )
  }
}

