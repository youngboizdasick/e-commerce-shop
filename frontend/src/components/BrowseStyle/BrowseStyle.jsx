import React from 'react'
import './BrowseStyle.css'
import casual from '../../assets/casual.png'
import formal from '../../assets/formal.png'
import party from '../../assets/party.png'
import school from '../../assets/school.png'

const BrowseStyle = () => {
    return (
        <div id='browse-style'>
            <div className='browse-style'>
                <h1 className='title'>browse by dress style</h1>
                <div className='grid-container'>
                    <div className="top">
                        <div className='grid-item' id='casual'>
                            <img src={casual} alt='Casual' />
                            <p>Casual</p>
                        </div>
                        <div className='grid-item' id='formal'>
                            <img src={formal} alt='Formal' />
                            <p>Formal</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className='grid-item' id='party'>
                            <img src={party} alt='Party' />
                            <p>Party</p>
                        </div>
                        <div className='grid-item' id='school'>
                            <img src={school} alt='School' />
                            <p>School</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseStyle