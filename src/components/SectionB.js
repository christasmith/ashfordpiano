import React from 'react';
import tuning from '../css/tune.jpeg'
import june from '../css/june.jpeg'

const SectionB = () => {
    return (
        <section id="section-b" className="grid">
            <ul>
                <li>
                    <div className="card">
                        <img src={tuning}/>
                            <div className="card-content">
                                <h3 className="card-title">Piano Tuning</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                            </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src="https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg" alt=""/>
                            <div className="card-content">
                                <h3 className="card-title">Consulting</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                            </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={june} alt=""/>
                            <div className="card-content">
                                <h3 className="card-title">Piano Servicing</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                            </div>
                    </div>
                </li>
            </ul>
        </section>

    );
};
export { SectionB as default };
