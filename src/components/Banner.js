import React from 'react';

const Banner = () => {
    return (
        <header id="showcase" className="grid">
            <div className="bg-image"></div>
            <div className="content-wrap">
                <h1 className="bg-title"> Ashford Piano Tuning</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>
                <a href="#section-b" className="btn">Read More</a>
            </div>
        </header>

    );
};
export { Banner as default };
