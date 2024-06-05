import React from 'react'
import './Brand.css'
import versace from '../../assets/logos/versace.png'
import gucci from '../../assets/logos/gucci.png'
import prada from '../../assets/logos/prada.png'
import zara from '../../assets/logos/zara.png'
import louisVuitton from '../../assets/logos/louis_vuitton.png'

const Brand = () => {
    return (
        <div id="brand">
            <div className='brand'>
                <img src={versace} alt='' />
                <img src={zara} alt='' />
                <img src={gucci} alt='' />
                <img src={prada} alt='' />
                <img src={louisVuitton} alt='' />
            </div>
        </div>
    )
}

export default Brand