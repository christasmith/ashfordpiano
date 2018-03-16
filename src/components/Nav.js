import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAddressCard} from '@fortawesome/fontawesome-free-solid'

const Nav = () => {
    return (
        <nav>
        <ul>
            <a href="#showcase">
                <li>Home</li>
            </a>

            <a href="#section-form">
                <li>Contact Me</li>
            </a>

            <a href="#section-b">
                <li>About Me</li>
            </a>

            <a href="#section-b">
                <li>Recommendations</li>
            </a>
        </ul>

        </nav>

    );
};
export { Nav as default };
