import React from 'react';
import './compros.css';
import { Link } from 'react-router-dom';


export class Cpros extends React.Component {
    render() {
        return (

            <div className='container Cpros'>
                <div className="card round_out">
                    <img src={this.props.courseImg.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.courseImg.title}</h5>
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                        <Link to='/' className='btn btn-danger p-2  w-100 rounded-pill txt_size'>
                        View Detail
                        </Link>
                   
                    </div>
                </div>
            </div>


        );
    }
}