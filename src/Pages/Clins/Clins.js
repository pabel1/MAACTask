import React from 'react';
import './Clins.css';
import ClinsImg1 from '../../images/logo/Aven.png';
import ClinsImg2 from '../../images/logo/Amara.png';
import ClinsImg3 from '../../images/logo/Circle.png';
import ClinsImg4 from '../../images/logo/Kyan.png';
import ClinsImg5 from '../../images/logo/Treva.png';

const Clins = () => {
    return (
        <div className='clins__sec text-[#0052CC] font-semibold text-3xl text-center py-10'>
            <h1 className='my-10 mb-10'>5,000+ high-impact teams rely on Fieldx</h1>
            <div className="teams-img flex items-center justify-center mt-12 my-10">
                <img className="mr-12 w-[120px]" src={ClinsImg1} alt="" />
                <img className="mx-12 w-[120px]" src={ClinsImg2} alt="" />
                <img className="mx-12 w-[120px]" src={ClinsImg3} alt="" />
                <img className="mx-12 w-[120px]" src={ClinsImg4} alt="" />
                <img className="ml-12 w-[120px]" src={ClinsImg5} alt="" />
            </div>
        </div>
    );
};

export default Clins;