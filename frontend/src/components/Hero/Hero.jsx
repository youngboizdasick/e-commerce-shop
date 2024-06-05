import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
    return (
        <div id='hero'>
            <div className='hero'>
                <div className='hero-left'>
                    <div className='title'>
                        <h2>find clothes</h2>
                        <h2>that matches</h2>
                        <h2>your style</h2>
                    </div>
                    <p className='content'>Fashion is more than just clothing. It's a way to express yourself and show the world who you are.</p>
                    <button type='button'>Shop Now</button>
                    <ul className='heroleft-statistic'>
                        <li>
                            <p className='quantity'>200+</p>
                            <p className='description'>International Brands</p>
                        </li>
                        <li>
                            <p className='quantity'>2,000+</p>
                            <p className='description'>High-quality Product</p>
                        </li>
                        <li>
                            <p className='quantity'>30,000+</p>
                            <p className='description'>Happy Customer</p>
                        </li>
                    </ul>
                </div>
                <div className='hero-right'>
                    <img src={hero} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Hero