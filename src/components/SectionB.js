import React from 'react';
import tuning from '../css/tune.jpeg'
import serv from '../css/serv.jpg'
import repairs from '../css/repairs.jpg'


const SectionB = () => {
    return (
        <section id="section-b" className="grid">
            <ul>
                <li>
                    <div className="card">
                        <img src={tuning}/>
                            <div className="card-content">
                                <h3 className="card-title">Tuning</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                            </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={repairs} alt=""/>
                            <div className="card-content">
                                <h3 className="card-title">Repairs</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                            </div>
                    </div>
                </li>
                <li>
                    <div className="card">
                        <img src={serv} alt=""/>
                            <div className="card-content">
                                <h3 className="card-title">Piano Care Advice</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi velit voluptatum cum maiores exercitationem.</p>
                            </div>
                    </div>
                </li>
            </ul>
        </section>

    );
};
export { SectionB as default };
