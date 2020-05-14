import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby";

import { FaLocationArrow, FaEnvelope } from "react-icons/fa";
import Social from './social';
import Button from './button';
import SpaPromo from '../images/spa-promo-ad.jpg';



const Footer = () => {
    const data = useStaticQuery(graphql`
        query SiteTitle {
            site {
                siteMetadata {
                    title,
                    description,
                    address,
                    email
                }
            }
        }
    `);

    return (
        <>
            <div className="footer">
                <div className="container footer-hr-container">
                    <hr className="footer-hr" />
                </div>
             
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className="footer-heading font-weight-bold text-uppercase mt-3 mb-4">{data.site.siteMetadata.title}</h6>
                            <p>{data.site.siteMetadata.description}</p>
                        </div>

                        <div className="col-md-2">
                            <h6  className="footer-heading font-weight-bold text-uppercase mt-3 mb-4">Links</h6>
                            <div className="footer-link">
                                <ul>
                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/appointment">Appointment</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h6  className="footer-heading font-weight-bold text-uppercase mt-3 mb-4">News & Promotions</h6>
                            <div className="view overlay z-depth-1-half">
                                <img src={SpaPromo} alt="spa promo ad" className="img-fluid" />
                                <p>Special offers - 15% offer on Spa</p>
                                <Link to="/page-2">
                                    <div className="mask rgba-white-light footer-read-more" >Read More...</div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="footer-heading font-weight-bold text-uppercase mt-3 mb-4">Our Location</h6>
                            <div style={{display: 'flex'}}>
                                <p><FaLocationArrow /></p> <p style={{marginLeft: '5px'}} >{data.site.siteMetadata.address}</p>
                            </div>
                            <p><FaEnvelope /> {data.site.siteMetadata.email}</p>
                            <div className="location-btn mt-5 mb-2">
                                <Button path="/contact">Message Us</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="copyright">
                <div className="container copyright-container">
                    <div className="copyright-content">
                        <small> 
                            © {new Date().getFullYear()} Copyright: &nbsp;
                            <Link to='/'>
                                {data.site.siteMetadata.title}
                            </Link> 
                        </small>
                    </div>
                    <div className="social">
                        <Social />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
