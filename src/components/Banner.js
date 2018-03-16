import React from 'react';

const Banner = () => {
    return (
        <header id="showcase" className="grid">
            <div className="bg-image"></div>
            <div className="content-wrap">
                <h1 className="bg-title"> David Ashford </h1>
                <p className="bg-title-smaller">  Piano Tuner </p>
                <p> Established 1982</p>
                <p> Servicing Hampshire and surrounding areas</p>
                <a href="#section-b" className="btn">Read More</a>
            </div>
        </header>

    );
};
export { Banner as default };
