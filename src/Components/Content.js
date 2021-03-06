import React from 'react';
import love from '../images/loveOne.jpg';
import sunrise from '../images/sunrise.jpg';

const Content = () => {
    return (
        <>
            <div className="menu-card">
                <img src={love} alt="" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Landscape Photography</h2>
                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.</p>
                    <span>$50</span>
                </div>
            </div>
            <div className="menu-card">
                <img src={sunrise} alt="" className="h-full rounded mb-20 shadow" />
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Landscape Photography</h2>
                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.</p>
                    <span>$30</span>
                </div>
            </div>
        </>
    );
};

export default Content;