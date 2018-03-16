import React from 'react';

const Banner = () => {
    return (
        <header id="showcase" className="grid">
            <div className="bg-image"></div>
            <div className="content-wrap">
                <h1 className="bg-title"> David Ashford </h1>
                <h1 className="bg-title-small">  Piano Tuner </h1>
                <p> Established 1982</p>
                <p> Servicing Hampshire and surrounding areas</p>
                <a href="#section-b" className="btn">Read More</a>
            </div>
        </header>

    );
};
export { Banner as default };
