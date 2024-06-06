import React from 'react'
import './Footer.css'
import { Envelope, Twitter, Facebook, Instagram, Github } from 'react-bootstrap-icons'

const Footer = () => {

    var aboutUs = [
        {
            "title": "enterprise",
            "links": ["Overview", "Services", "Products", "Contact"]
        },
        {
            "title": "corporation",
            "links": ["Home", "Solutions", "Team", "Blog"]
        },
        {
            "title": "business",
            "links": ["Introduction", "Portfolio", "Clients", "Join Us"]
        },
        {
            "title": "organization",
            "links": ["History", "Technologies", "Achievements", "Opportunities"]
        }
    ];
    return (
        <div id='footer'>
            <div className='contact'>
                <div className='contact-left'>
                    <h1>stay upto date about</h1>
                    <h1>our latest offers</h1>
                </div>
                <div className='contact-right'>
                    <div className='input-mail'>
                        <Envelope className='envelop icon' />
                        <input type='email' name='email' id='email' placeholder='Enter your email address' />
                    </div>
                    <button>Subscribe to Newsletter</button>
                </div>
            </div>
            <div className='footer'>
                <div className='footer-left'>
                    <h1 className='title'>haru</h1>
                    <div className='description'>
                        <p>Style Delivered: Your Wardrobe's Best Friend</p>
                        <p>Let us turn every moment into your personal fashion runway.</p>
                    </div>
                    <div className='social'>
                        <a href=''>
                            <div className='icon'><Twitter /></div>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=61558698672307'>
                            <div className='icon'><Facebook /></div>
                        </a>
                        <a href='https://www.instagram.com/youngboizdasick_/'>
                            <div className='icon'><Instagram /></div>
                        </a>
                        <a href='https://github.com/youngboizdasick?tab=repositories'>
                            <div className='icon'><Github /></div>
                        </a>
                    </div>
                </div>
                <div className='about-us'>
                    {
                        aboutUs.map((item, index) => (
                            <div key={index} className='item'>
                                <h3>{item.title}</h3>
                                <div className='link-button'>
                                    <p>{item.links[0]}</p>
                                    <p>{item.links[1]}</p>
                                    <p>{item.links[2]}</p>
                                    <p>{item.links[3]}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='copy-right'>Haru &copy; 2024. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer