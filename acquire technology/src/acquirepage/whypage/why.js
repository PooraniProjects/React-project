import React from 'react';
import './why.css';

export class Uswhy extends React.Component {
    render() {
        return (
            <div>
                <section className='container_page'>
                    <div className='why_start_content'>
                        <div className='content_left'>
                            <h2>Our mission is to empower the next generation of IT experts,</h2>

                            <p>As a software engineer, acquiring technologies is crucial to building and advancing your career. Hackathons, debates, pair programming, workshops, and lots of first principles thinking are all part of our comprehensive program! An accelerated learning program that prepares you for a career in the hottest industry.</p>

                        </div>

                        <div className='img_right'>
                            <img src='/images/why-us.png' />
                        </div>
                    </div>
                </section>

                <section className='container_page why_page'>
                    <div className='why_middle_content'>
                        <div className='why_left_content'>
                            <h1> Our Mission</h1>
                            <p>To democratize tech education worldwide by meeting the standards of the EdTech industry.</p>

                        </div>

                        <div className='vertical'></div>

                        <div className='why_right_content'>
                            <h1>Our Vision</h1>
                            <p>To shape lives by bestowing high-end tech skills to learners in their native languages & Connect the tech career aspirants with the corporate industry.</p>
                        </div>
                    </div>
                </section>

                <section className='container_page why_page'>
                    <div className='story_page'>
                        <div className='center_head'>
                            <h1>The story behind our</h1>
                            <p>We are focused on understanding client’s business first, and dedicated to solve their business problems.</p>
                            <h2>Leadership</h2>
                        </div>

                        <div className='img_center'>

                            <div class="main_founder">
                                <div class="container_founder">
                                    <img src='/images/acquiring_founder.png' className='img_first' />
                                    <div class="centered">Mr. Anvesh Babu</div>
                                    <div class="center">Founder</div>
                                </div>
                                <div class="container_founder">
                                <img src='/images/mirsha.png' className='img_second'/>
                                    <div class="centered">Mr. Mirsha</div>
                                    <div class="center">Co-Founder</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='why_page team_page_bckg'>
                    <div className=' container_page '>

                        <div className='team_page '>

                            <h1>Join & Team Up with Us</h1>
                            <p>Want to be a part of dedicated team that aims to upskill everyone across the globe?</p>
                            <h4>Join us to make an impact!</h4>
                            <p className='main_para'>Welcoming to hire professionals for Technical Development, Graphic Design, Digital Marketing, Sales, & Industry experts across various domains.</p>
                            <h3>Send your updated CV & resume to acquiringtechnology@gmail.com</h3>

                        </div>






                    </div>
                </section>

               
            </div >
        );
    }

}
