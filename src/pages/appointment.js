import React from "react";

import Layout from '../components/layout';
import SEO from '../components/seo';
import { FaPhone, FaEnvelope } from "react-icons/fa";


class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'default',
            msg: 'Your Message (required)',
            book: 'Book an Appointment'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.book);
        event.preventDefault();
    }

    render() {
        let book = this.state.book;
        return (
            <Layout>
                <SEO title="Appointment" />
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="appointment-title mt-5 mb-4">Appointment Form</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group ">
                                    <select className="form-control" 
                                        value={this.state.value} onChange={this.handleChange}>
                                        <option selected value="default">Select Your Service</option>
                                        <option value="facial treatment">Facial Treatment</option>
                                        <option value="massage">Massage</option>
                                        <option value="body treatment">Body Treatment</option>
                                    </select>
                                </div>

                                <div className="form-row mb-4 mt-5">
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Your First Name (required)" 
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Your Last Name (required)" 
                                        />
                                    </div>
                                </div>

                                <div className="form-row mb-4">
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            // placeholder="Your First Name (required)" 
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="inlineRadioOptions"  
                                                value="option1" 
                                            />
                                            <label 
                                                className="form-check-label" 
                                                for="inlineRadio1">Male
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="inlineRadioOptions" 
                                                value="option2" 
                                            />
                                            <label 
                                                className="form-check-label" 
                                                for="inlineRadio2"> Female
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="inlineRadioOptions" 
                                                id="inlineRadio3" 
                                                value="option3" 
                                            />
                                            <label 
                                                className="form-check-label" 
                                                for="inlineRadio3"> Child
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row mb-4">
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="Your Email (required)" 
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input 
                                            type="tel" 
                                            className="form-control" 
                                            placeholder="Phone (required)" 
                                        />
                                    </div>
                                </div>

                                <textarea className="form-control mb-4" />

                                <input type="submit" 
                                    value={book} 
                                    className="appointment-btn"
                                />
                            </form>
                        </div>
                
                        <div className="col-md-4">
                            <div> 
                                <h4 className="appointment-title mt-5 mb-4">Book an Appointment</h4>
                                <p className="appointment-booking-container">
                                    <FaPhone className="appointment-social" />
                                    <span className="appointment-social-info">
                                        &nbsp; Phone:
                                        +234 703 195 9184
                                    </span>
                                </p>
                                <p className="appointment-booking-container">
                                    <FaEnvelope className="appointment-social"/> 
                                    <a href="mailto:doronybeauty04@gmail.com" 
                                        className="appointment-social-info">
                                        &nbsp; Email: 
                                        doronybeauty04@gmail.com
                                    </a> 
                                </p>

                                <h4 className="appointment-title mt-5 mb-3">How we may help you</h4>
                                <div>
                                    <details open>
                                        <summary className="mb-2">Body Treatment</summary>
                                        <p>
                                            May help prevent wrinkles, decrease cellulite,
                                            and slow physical signs of aging, leaving your 
                                            skin looking fresher and younger.
                                        </p>
                                    </details>

                                    <details>
                                        <summary className="mb-2">Massage</summary>
                                        <p>
                                            It help in stress relief, but regular massage sessions over a 
                                            prolonged period of time can boost energy levels, reduce pain, 
                                            and stimulate individuals on physical as well as emotional levels.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Appointment;