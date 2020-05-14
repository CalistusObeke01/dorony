import React from 'react';
import Layout from '../components/layout';

const Contact = () => (
    <Layout>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4">
                    <h4 className="mt-5">Find our Location</h4>
                </div>
                <div className="col-md-8">
                    <h4 className="mt-5">Stay in Touch</h4>
                    <form>
                        <div className="form-row mb-3 mt-4">
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
                  
                        <div className="form-row mb-3">
                            <div className="form-group col-md-12">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Subject (required)" 
                                />
                            </div>
                        </div>

                        <textarea className="form-control mb-4" />

                        <input type="submit" 
                            className="appointment-btn"
                            value="Mail us Now"
                        />
                    </form>
                </div>
            </div>
        </div>
    </Layout>
)

export default Contact;