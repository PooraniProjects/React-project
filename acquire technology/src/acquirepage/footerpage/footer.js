import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailDetails: {
                email: '',
            }
        }
        this.validator = new SimpleReactValidator({
            className: 'text-danger'
        });
    }


    handleemail = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            emailDetails: {
                ...this.state.emailDetails,
                [name]: value
            }
        })

    }

    submitemail = () => {
        console.log(this.state.emailDetails)

        if (this.validator.allValid()) {
            this.setState({
                emailDetails: {

                    email: '',

                }
            })
            alert('Thanks for visting our page!!');
        }
        else {
            this.validator.showMessages();

            this.forceUpdate();
        }
    }





    render() {
        return (

            <div className='footer_content container_page'>
                <div className='footer_left'>
                    <img src='\images\logo.svg' width={200} />
                    <p>Skills for your present (and your future). Get<br /> started with us.</p>
                    <p>© Copyrights. All rights reserved.<span>Acquiring</span></p>
                </div>

                <div className='footer_middle'>
                    <h3>Quick links</h3>
                    <Link to='/' >
                        Home
                    </Link>
                    <Link to='/acquirepage/coursepage/course'>
                        All Courses
                    </Link>
                    <Link to='/acquirepage/liveclass/classlv'>
                        Live Classes
                    </Link>
                    <Link to='/acquirepage/whypage/why'>
                        Why Us?
                    </Link>
                </div>

                <div className='footer_right'>
                    <h3>Stay in Touch for Awesome Updates &<br /> Offers!</h3>
                    <p>Subscribe to our newsletter for alerts on New Courses, Free<br /> Workshops, & Masterclasses</p>

                    <div className='footer_form'>

                        <input type='email' placeholder="Enter a email id" name='email'  value={this.state.emailDetails.email} onChange={this.handleemail} />
                        {this.validator.message('Email', this.state.emailDetails.email, 'required|email')}
                        <i className='fas fa-paper-plane btn btn-danger ' onClick={this.submitemail}></i>
                    </div>

                </div>

            </div>

        )
    }
}