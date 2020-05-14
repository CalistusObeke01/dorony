import React from 'react';
import Link from './link';
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const socialLinks = [
    {id: 1, link: 'https://www.facebook.com/Doronybeauty', icon: <FaFacebookF /> },
    {id: 2, link: 'https://www.instagram.com/Doronybeauty', icon: <FaInstagram /> }
];
    
const Social = () => (
    <>
        {socialLinks.map(socialLink => (
            <div key={socialLink.id} className="social-container"> 
                <Link href={socialLink.link} content={socialLink.icon} />
            </div>
        ))}
    </>
)

export default Social;