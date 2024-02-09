import React from 'react';
import './contact.css';
import SimpleReactValidator from 'simple-react-validator';

export class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            subDetails:{
                name:'',
                email:'',
                mobile:'',
                course:'',
            }
        }
        this.validator = new SimpleReactValidator({
            className:'text-danger'
        });
        
    }

    handleform=(event)=>{
        // console.log(event.target.name);
        let name=event.target.name;
        let value=event.target.value;


        this.setState({
            subDetails:{
                ...this.state.subDetails,
                [name]:value
            }
        })

    }

    submitform=()=>{
        console.log(this.state.subDetails)

         if (this.validator.allValid()) {
            this.setState({
                subDetails:{
                    name:'',
                    email:'',
                    mobile:'',
                    course:'',
                }
            })
          alert('You submitted the form and stuff!');
         } 
         else {
      this.validator.showMessages();
         
          this.forceUpdate();
       }
    }
    
   


    render() {
        return (
            <div>
                <section className='contact container_page'>
                    <div className='row contact_page'>
                        <div className=' col-md-4 card '>
                            <div className='card-body card_icons'>
                                <div>
                                    <i className='fa fa-phone'></i>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 9042771660</p>
                                </div>
                            </div>

                        </div>

                        <div className=' col-md-4 card '>
                            <div className='card-body card_icons'>
                                <div>
                                    <i className='fa fa-envelope'></i>
                                </div>
                                <div>
                                    <h4>Mail address</h4>
                                    <p>acquiringtechnology@gmail.com</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='contacts container_page '>

                    <div className='row justify-content-center p-3'>
                        <div className='col-md-6'>

                            <div className='card shadow'>

                                <h3 className='ml-3 mt-2 form_title'>Start Your Career Now</h3>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type='name' placeholder='Enter Name'  name='name' class="form-control " value={this.state.subDetails.name} onChange={this.handleform}/>
                                                {this.validator.message('Name', this.state.subDetails.name, 'required')}
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div class="form-group">
                                            <label>Email Address</label>
                                        <input type='email' placeholder='Ener Email address' name='email' class="form-control " value={this.state.subDetails.email} onChange={this.handleform}/> 
                                        {this.validator.message('Email', this.state.subDetails.email, 'required|email')}
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div class="form-group">
                                            <label>Mobile Number</label>
                                            <input type='number' placeholder='Enter Mobile Number' name='mobile' class="form-control " value={this.state.subDetails.mobile} onChange={this.handleform}/>
                                            {this.validator.message('Mobile Number', this.state.subDetails.mobile, 'required')}
                                            </div>
                                        </div>

                                        <div className='col-md-12'>
                                            <div class="form-group">
                                            <label>Course Preference</label>
                                            <select name='course' id='course' class="form-control "  placeholder='Select... ' value={this.state.subDetails.course} onChange={this.handleform}>
                                                <option value='MERN'>MERN Fullstack</option>
                                                <option value='MEAN'>MEAN Fullstack</option>
                                                <option value='React'>React Js (incl. React Router & Redux)</option>
                                                <option value='Angular'>Angular</option>
                                                <option value='React  Native'>React Native</option>
                                            </select>
                                            {this.validator.message('Course', this.state.subDetails.course, 'required')}                                           
                                             </div>

                                        </div>



                                        <button type="submit" className="btn btn-danger form_btn ml-3" onClick={this.submitform}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        )
    }
}