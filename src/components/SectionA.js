import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faWrench, faEnvelope,faHeart } from '@fortawesome/fontawesome-free-solid'

const SectionA = () => {
    return (
        <section id="section-a">
            <div className="content-wrap">
                {/*<h2 className="content-title">What do we offer?</h2>*/}
                <div className="content-text">

                    <h3 className="iconWriting"><FontAwesomeIcon icon={faWrench}  color="brown" className="icon" />Tuning </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>

                    <h3 className="iconWriting"><FontAwesomeIcon icon={faEnvelope}  color="brown" className="icon"/>Consultation </h3>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>

                    <h3 className="iconWriting"><FontAwesomeIcon icon={faHeart} color="brown" className="icon"/>Servicing </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</p>
                </div>
            </div>
        </section>

    );
};
export { SectionA as default };
